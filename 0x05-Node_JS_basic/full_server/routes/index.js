import express from 'express';
import AppController from '../controllers/AppController.js';
import Studentcontroller from '../controllers/StudentController.js';

const router = express.Router();

router.get('/', AppController.getHome);
router.get('/students', Studentcontroller.getAllStudents);
router.get('/students/:major', Studentcontroller.getAllStudentsByMajor);

export default router;
