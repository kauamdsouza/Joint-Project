import { Request, Response } from 'express'
import User from '../models/User'

class UserController {

    async createUser(req: Request, res: Response) {
        try {
            console.log(req.body)
            const { name, email, password } = req.body

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                return res.status(400).json({
                    mensagem: 'Email inválido'
                })
            }
            const userExists = await User.findOne({
                where: {
                    email: email
                }
            })

            if (userExists) {
                return res.status(400).json({
                    mensagem: 'Email já cadastrado'
                })
            }

            const user = await User.create({
                name,
                email,
                password
            })

            return res.status(201).json(user)


        } catch (error: any) {
            return res.status(500).json({
                mensagem: 'Erro ao salvar usuário',
                erro: error
            })
        }
    }

    async login(req: Request, res: Response) {

        const userLogin = await User.findOne({
            where: {
                name: req.body.name
            }
        })

        if (!userLogin) {
            return res.status(401).json({
                message: 'Usuário não encontrado'
            })
        }

        if (userLogin.getDataValue('password') !== req.body.password) {
            return res.status(401).json({
                message: 'Senha incorreta'
            })
        }

        return res.status(200).json({
            message: 'Login realizado'
        })
    }
}

export default new UserController()