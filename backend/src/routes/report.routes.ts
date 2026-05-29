import { Router } from 'express';
import reportController from '../controllers/report.controller';

const router = Router();

router.post(
    '/report',
    reportController.createReport
);

export default router;