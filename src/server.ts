import express, { Express } from 'express'
import cors from 'cors'

import { PORT } from './config/config'
import { routes } from './routes'
import { connectDb } from './database/momgo'

export class Server {
    private readonly app: Express

    constructor() {
        this.app = express()
        connectDb().catch((error) => console.error(error))
        this.middlewares()
        this.configuration()
        this.routes()
    }

    middlewares(): void {
        this.app.use(express.json())
        this.app.use(cors())
    }

    routes(): void {
        this.app.use('/api/blog/post', routes.PostRoute)
        this.app.use('/api/blog/comment', routes.CommentRoute)
        this.app.use('/api/blog/user', routes.UserRoute)
        this.app.use('/api/blog/auth', routes.AuthRoute)
    }

    configuration(): void {
        this.app.set('port', PORT)
    }

    listen(): void {
        this.app.listen(this.app.get('port'), () => {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            console.log(`Server running on port ${this.app.get('port')}`)
        })
    }
}