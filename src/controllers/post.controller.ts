import { Request, Response } from 'express'

import { PostService, UserService } from '../services'
import { validationPostEntry } from '../utils/utils'

export const postController = {
    getAllPost: async (_req: Request, res: Response) => {
        try {
            const postData = await PostService.getAll()

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    getPostById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const postData = await PostService.getPostById(id)

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    createPost: async (req: Request, res: Response) => {
        try {
            const { title, content, author, category, tags, taggedUsers, createdAt } = req.body
            const idTaggedUsers: string[] = await validationUsersTag(taggedUsers)

            const newPostEntry = validationPostEntry({ title, content, author, category, tags, taggedUsers: idTaggedUsers, createdAt })
            const postData = await PostService.createPost(newPostEntry)

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    updatePost: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const postData = await PostService.updatePost(id, req.body)

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    deletePost: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const postData = await PostService.deletePost(id)

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    findPostByCategories: async (req: Request, res: Response) => {
        try {
            const { category } = req.params
            const postData = await PostService.filterPostByCategory(category)

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    findPostByTags: async (req: Request, res: Response) => {
        try {
            const { tag } = req.params
            const postData = await PostService.filterPostByTag(tag)

            return res.status(200).send(postData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
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
