import { CommentModel } from '../models/comment.model'
import { IComment } from '../utils/interfaces'

export const CommentService = {
    getAll: async () => {
        return await CommentModel.find()
    },
    getCommentById: (id: string) => {
        return CommentModel.findById(id)
    },
    createComment: async (post: IComment) => {
        return await CommentModel.create(post)
    },
    updateComment: async (id: string, post: IComment) => {
        return await CommentModel.findByIdAndUpdate(id, post, { new: true })
    },
    deleteComment: async (id: string) => {
        return await CommentModel.findByIdAndDelete(id)
    }
}