import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import Router from './routers'
import swaggerUi from 'swagger-ui-express'
import mongoose, { ConnectOptions } from 'mongoose'
import { PORT, DATABASE_NAME, URL } from './config/config'
import dotenv from 'dotenv'
var cors = require('cors')

const app: Application = express()

dotenv.config()

app.use(express.json())
app.use(morgan('tiny'))
app.use(express.static('public'))

app.use(
    '/docs',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        },
    })
)

app.use(Router)

mongoose
    .connect(`${URL}${DATABASE_NAME}`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    } as ConnectOptions)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server ve database aktif. ', PORT)
        })
    })
    .catch((hata: any) => {
        console.log(`${hata}`)
    })
