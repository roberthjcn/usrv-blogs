import { Request, Response } from 'express'

import { CommentService } from '../services'
import { validationCommentEntry } from '../utils/utils'
import { HttpResponse } from '../shared/http.shared'

const httpResponse: HttpResponse = new HttpResponse()

export const commentController = {
    getAllComment: async (_req: Request, res: Response) => {
        try {
            const commentData = await CommentService.getAll()

            return httpResponse.Ok(res, commentData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    getCommentById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const commentData = await CommentService.getCommentById(id)

            return httpResponse.Ok(res, commentData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    createComment: async (req: Request, res: Response) => {
        try {
            const newCommentEntry = validationCommentEntry(req.body)
            const commentData = await CommentService.createComment(newCommentEntry)

            return httpResponse.Ok(res, commentData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    updateComment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const commentData = await CommentService.updateComment(id, req.body)

            return httpResponse.Ok(res, commentData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    deleteComment: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const commentData = await CommentService.deleteComment(id)

            return httpResponse.Ok(res, commentData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    }
}