import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Number,
    }
})

export const PostModel = model('blog', postSchema)