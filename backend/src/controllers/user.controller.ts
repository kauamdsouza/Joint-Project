import { Request, Response } from 'express'
import { User } from '../models/User'

class UserController {

    async createUser(req: Request, res: Response) {

        const user: User = {
            id: 1,
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }

        return res.status(201).json(user)
    }

}

export default new UserController()