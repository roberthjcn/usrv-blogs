import { Request, Response } from 'express'
import bcrypt from 'bcrypt'

import { UserService } from '../services'
import { validationUserEntry } from '../utils/utils'
import { HttpResponse } from '../shared/http.shared'

const httpResponse: HttpResponse = new HttpResponse()

export const userController = {
    getAllUser: async (_req: Request, res: Response) => {
        try {
            const userData = await UserService.getAll()

            return httpResponse.Ok(res, userData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    getUserById: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userData = await UserService.getUserById(id)

            return httpResponse.Ok(res, userData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    createUser: async (req: Request, res: Response) => {
        try {
            const newUserEntry = validationUserEntry(req.body)
            const hashedPassword = await bcrypt.hash(newUserEntry.password, 10);
            const userData = await UserService.createUser({ username: newUserEntry.username, email: newUserEntry.email, password: hashedPassword, createdAt: newUserEntry.createdAt })

            return httpResponse.Ok(res, userData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    updateUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userData = await UserService.updateUser(id, req.body)

            return httpResponse.Ok(res, userData)
        } catch (err: any) {
            return httpResponse.Error(res, err)
        }
    },

    deleteUser: async (req: Request, res: Response) => {
        try {
            const { id } = req.params
            const userData = await UserService.deleteUser(id)

            return httpResponse.Ok(res, userData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    },

    findUser: async (req: Request, res: Response) => {
        try {
            const { email } = req.body
            const userData = await UserService.findOneUser(email)

            return httpResponse.Ok(res, userData)
        } catch (err) {
            return httpResponse.Error(res, err)
        }
    }
}

