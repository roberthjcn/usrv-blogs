export interface IPost {
    content: string
    author: string
    title: string
    createdAt: number
}

export interface IComment {
    content: string
    author: string
    post: string
    createdAt: number
}

export interface IUser {
    username: string
    password: string
    email: string
    createdAt: number
}

