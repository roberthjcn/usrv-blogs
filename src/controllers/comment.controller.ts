import { Request, Response } from 'express'

import { CommentService } from '../services'
import { validationCommentEntry } from '../utils/utils'

export const commentController = {
    getAllComment: async (_req: Request, res: Response) => {
        try {
            const commentData = await CommentService.getAll()

            return res.status(200).send(commentData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    getCommentById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const commentData = await CommentService.getCommentById(id)

            return res.status(200).send(commentData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    createComment: async (req: Request, res: Response) => {
        try {
            const newCommentEntry = validationCommentEntry(req.body)
            const commentData = await CommentService.createComment(newCommentEntry)

            return res.status(200).send(commentData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    updateComment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const commentData = await CommentService.updateComment(id, req.body)

            return res.status(200).send(commentData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    deleteComment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const commentData = await CommentService.deleteComment(id)

            return res.status(200).send(commentData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    }
}