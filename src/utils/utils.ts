import { z } from 'zod'
import { IComment, IPost, IUser } from './interfaces'

const postSchema = z.object({
    author: z.string({
        invalid_type_error: 'El id del autor debe de ser un texto.',
        required_error: 'El id del autor es requerido.'
    }),
    title: z.string({
        invalid_type_error: 'El título del post debe de ser un texto.',
        required_error: 'Título es requerido.'
    }),
    content: z.string({
        invalid_type_error: 'El contenido del post debe de ser un texto.',
        required_error: 'El contenido del post es requerido.'
    }),
    category: z.array(z.string()),
    tags: z.array(z.string()),
    taggedUsers: z.array(z.string()),
    createdAt: z.number().positive({
        message: 'La fecha de creación del post debe ser un número.'
    })
})


const commentSchema = z.object({
    content: z.string({
        invalid_type_error: 'El contenido debe de ser un texto.',
        required_error: 'El contenido del comentario es requerido.'
    }),
    author: z.string({
        invalid_type_error: 'El id del autor debe de ser un texto.',
        required_error: 'El id del autor es requerido.'
    }),
    post: z.string({
        invalid_type_error: 'El id del post debe de ser un texto.',
        required_error: 'El id del post es requerido.'
    }),
    createdAt: z.number().positive({
        message: 'La fecha de creación debe de ser un número.'
    })
})


const userSchema = z.object({
    username: z.string({
        invalid_type_error: 'El nombre de usuario debe de ser un texto.',
        required_error: 'El nombre de usuario es requerido.'
    }),
    email: z.string({
        invalid_type_error: 'El email debe de ser un texto.',
        required_error: 'El email es requerido.'
    }).email('El email ingresado es inválido.'),
    password: z.string({
        required_error: 'La contraseña es requerida.'
    }).min(4),
    createdAt: z.number().positive({
        message: 'La fecha de creación debe de ser un número.'
    })
})



export const validationPostEntry = (object: IPost): IPost => {
    return postSchema.parse(object) as IPost
}


export const validationCommentEntry = (object: IComment): IComment => {
    return commentSchema.parse(object) as IComment
}

export const validationUserEntry = (object: IUser): IUser => {
    return userSchema.parse(object) as IUser
}