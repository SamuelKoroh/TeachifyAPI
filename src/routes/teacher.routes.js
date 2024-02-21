import express from 'express';
import TeacherController from '../controllers/teachers.controller';

const router = express.Router();

router.get('/', TeacherController.getTeachers);
router.post('/', TeacherController.postTeacher);

export default router;
