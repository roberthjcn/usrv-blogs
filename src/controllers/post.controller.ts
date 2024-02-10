import { Request, Response } from 'express'

import { PostService } from '../services'
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
            const newPostEntry = validationPostEntry(req.body)
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
    }
}