import { PostModel } from '../models/post.model'
import { IPost } from '../utils/interfaces'

export const PostService = {
    getAll: async () => {
        return await PostModel.find()
    },
    getPostById: (id: string) => {
        return PostModel.findById(id)
    },
    createPost: async (post: IPost) => {
        return await PostModel.create(post)
    },
    updatePost: async (id: string, post: IPost) => {
        return await PostModel.findByIdAndUpdate(id, post, { new: true })
    },
    deletePost: async (id: string) => {
        return await PostModel.findByIdAndDelete(id)
    }
}