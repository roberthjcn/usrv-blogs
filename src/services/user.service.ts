import { UserModel } from '../models/user.model'
import { IUser } from '../utils/interfaces'

export const UserService = {
    getAll: async () => {
        return await UserModel.find()
    },
    findOneUser: async (email: string) => {
        return await UserModel.findOne({ email: email })
    },
    getUserById: (id: string) => {
        return UserModel.findById(id)
    },
    createUser: async (post: IUser) => {
        return await UserModel.create(post)
    },
    updateUser: async (id: string, post: IUser) => {
        return await UserModel.findByIdAndUpdate(id, post, { new: true })
    },
    deleteUser: async (id: string) => {
        return await UserModel.findByIdAndDelete(id)
    }
}