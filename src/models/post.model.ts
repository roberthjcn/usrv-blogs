import mongoose, { Schema, model } from 'mongoose'

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: Array
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    tags: {
        type: Array,
    },
    taggedUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: {
        type: Number,
    }
})

export const PostModel = model('post', postSchema)