import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { UserService } from '../services'
import { SECRET_KEY } from '../config/config'
import { HttpResponse } from '../shared/http.shared'

const httpResponse: HttpResponse = new HttpResponse()

export const authController = {
    login: async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body
            const user = await UserService.findOneUser(email)

            if (!user) {
                return httpResponse.Unauthorized(res, 'Correo no se encuentra registrado')
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                return httpResponse.Unauthorized(res, 'Contraseña inválida')
            }
            const token = jwt.sign({ id: user._id }, SECRET_KEY!.toString(), { expiresIn: '1h' })

            return httpResponse.Ok(res, { message: 'Inicio de sesión exitoso', token })
        } catch (err: any) {
            return httpResponse.Error(res, err)
        }
    }
}