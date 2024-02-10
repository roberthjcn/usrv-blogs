import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { UserService } from '../services'
import { SECRET_KEY } from '../config/config'



export const authController = {
    login: async (req: Request, res: Response) => {
        try {

            const { email, password } = req.body
            const user = await UserService.findOneUser(email)

            if (!user) {
                return res.status(401).json({ message: 'Correo no se encuentra registrado' })
            }
            const isPasswordValid = await bcrypt.compare(password, user.password)

            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Contraseña inválida' })
            }
            const token = jwt.sign({ id: user._id }, SECRET_KEY!.toString(), { expiresIn: '1h' })

            return res.status(200).json({ message: 'Inicio de sesión exitoso', token })
        } catch (err: any) {
            return res.status(400).send({ message: err.message })
        }
    }
}