import { Router } from "express";
import JobController from '../controllers/JobController.js'


const router = Router()

//Projects
router.post('/', JobController.create)
router.get('/', JobController.list)
router.patch('/:id', JobController.update)

export default router