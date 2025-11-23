import { Router } from 'express'
import ProjectController from '../controllers/ProjectController.js'

const router = Router()

//Projects
router.post('/', ProjectController.create)
router.get('/', ProjectController.list)
router.patch('/:id', ProjectController.update)
router.delete('/:id', ProjectController.delete)

export default router
