import mongoose, { Schema, model } from 'mongoose'

const commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post'
    },
    createdAt: {
        type: Number
    }
})

export const CommentModel = model('comment', commentSchema)