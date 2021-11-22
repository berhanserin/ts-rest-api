import express from 'express'
import { UsersController } from '../controllers/user'
import { NextFunction, Response, Request } from 'express'
var cors = require('cors')

const router = express.Router()

router.get('/users',cors(), async (_req: Request, res: Response) => {
    const controller = new UsersController()
    const response = await controller.getAllUsers()
    return res.send(response)
})

router.get('/users/:id',cors(),  async (_req: Request, res: Response) => {
    const controller = new UsersController()
    const response = await controller.getUser(_req.params.id)
    return res.send(response)
})

export default router
