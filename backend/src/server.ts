import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Backend funcionando com TypeScript!')
})

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000')
})