import express from 'express';
import teacherRoutes from './teacher.routes';
import authRoutes from './auth.routes';

const router = express.Router();

router.use('/teachers', teacherRoutes);
router.use('/auth', authRoutes);

export default router;
