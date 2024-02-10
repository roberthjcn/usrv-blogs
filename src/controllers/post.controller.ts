import { Request, Response } from 'express'

import { PostService, UserService } from '../services'
import { validationPostEntry } from '../utils/utils'
import { HttpResponse } from '../shared/http.shared'

const httpResponse: HttpResponse = new HttpResponse()

export const postController = {
    getAllPost: async (_req: Request, res: Response) => {
        try {
            const postData = await PostService.getAll()

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    getPostById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const postData = await PostService.getPostById(id)

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    createPost: async (req: Request, res: Response) => {
        try {
            const { title, content, author, category, tags, taggedUsers, createdAt } = req.body
            const idTaggedUsers: string[] = await validationUsersTag(taggedUsers)

            const newPostEntry = validationPostEntry({ title, content, author, category, tags, taggedUsers: idTaggedUsers, createdAt })
            const postData = await PostService.createPost(newPostEntry)

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    updatePost: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const postData = await PostService.updatePost(id, req.body)

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    deletePost: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const postData = await PostService.deletePost(id)

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    findPostByCategories: async (req: Request, res: Response) => {
        try {
            const { category } = req.params
            const postData = await PostService.filterPostByCategory(category)

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    findPostByTags: async (req: Request, res: Response) => {
        try {
            const { tag } = req.params
            const postData = await PostService.filterPostByTag(tag)

            return httpResponse.Ok(res, postData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    }
}

const validationUsersTag = async (usersNames: Array<string>): Promise<string[]> => {
    const idUsers = await UserService.findUser(usersNames)
    let idsUsersEntry: Array<string> = []

    idUsers.forEach(user => {
        idsUsersEntry.push(user._id.toString())
    })

    return idsUsersEntry
}
