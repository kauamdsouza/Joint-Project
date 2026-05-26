import { Sequelize } from 'sequelize'

const connection = new Sequelize(
    'meu_projeto',
    'kaua',
    '123456',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
)

connection.authenticate()
    .then(() => {
        console.log('Banco conectado!')
    })
    .catch((error) => {
        console.log(error)
    })

export default connection