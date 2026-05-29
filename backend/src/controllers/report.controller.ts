import { Request, Response } from 'express'
import Report from '../models/report'

class ReportController {
    async createReport(req: Request, res: Response): Promise<Response> {
        const { title, description, page } = req.body

        const report = await Report.create({
            userId: 1,
            title,
            description,
            page
        })

        return res.status(201).json({
            message: 'Report salvo com sucesso',
            report
        })
    }
}

export default new ReportController()