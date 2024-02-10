import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import { UserService } from '../services'
import { validationUserEntry } from '../utils/utils'

export const userController = {
    getAllUser: async (_req: Request, res: Response) => {
        try {
            const userData = await UserService.getAll()

            return res.status(200).send(userData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userData = await UserService.getUserById(id)

            return res.status(200).send(userData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    createUser: async (req: Request, res: Response) => {
        try {
            const newUserEntry = validationUserEntry(req.body)
            const hashedPassword = await bcrypt.hash(newUserEntry.password, 10);
            const userData = await UserService.createUser({ username: newUserEntry.username, email: newUserEntry.email, password: hashedPassword, createdAt: newUserEntry.createdAt })

            return res.status(200).send(userData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userData = await UserService.updateUser(id, req.body)

            return res.status(200).send(userData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userData = await UserService.deleteUser(id)

            return res.status(200).send(userData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    },

    findUser: async (req: Request, res: Response) => {
        try {
            const { email } = req.body
            const userData = await UserService.findOneUser(email)

            return res.status(200).send(userData)
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    }
}

