import { Router } from 'express'

import { userController } from '../controllers'

export const router = Router()

router.get('/', userController.getAllUser)

router.post('/', userController.createUser)

router.post('/login', userController.findUser)

router.get('/:id', userController.getUserById)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)


export default router