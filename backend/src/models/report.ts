// src/models/report.model.ts
import { DataTypes } from 'sequelize'
import connection from '../database/connection'

const Report = connection.define('reports', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    page: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

export default Report