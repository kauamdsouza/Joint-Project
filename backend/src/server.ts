import express from 'express'
import cors from 'cors'

import connection from './database/connection'
import User from './models/User'

const app = express()

app.use(cors())
app.use(express.json())

connection.sync()
    .then(() => {
        console.log('Banco conectado')
    })
    .catch((error) => {
        console.log(error)
    })

app.get('/', (req, res) => {
    res.send('Backend funcionando com TypeScript!')
})

app.post('/users', async (req, res) => {

    try {

        const user = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        })

        return res.status(201).json({
            mensagem: 'Usuário salvo',
            user
        })

    } catch (error) {

        console.log('ERRO AO SALVAR:', error)

        return res.status(500).json({
            mensagem: 'Erro ao salvar usuário',
            erro: error
        })
    }

})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})