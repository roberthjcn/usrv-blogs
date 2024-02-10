import { connect } from 'mongoose'

import { MONGO_URI } from '../config/config'

export const connectDb = async (): Promise<void> => {
    try {
        await connect(MONGO_URI as string)
    } catch (error) {
        console.error(error)
    }
}
