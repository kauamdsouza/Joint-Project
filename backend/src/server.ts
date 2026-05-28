import express from 'express'
import cors from 'cors'

import connection from './database/connection'
import router from './routes/user.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use(router)

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

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})