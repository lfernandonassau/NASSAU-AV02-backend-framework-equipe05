import { Router } from 'express'
import ProjectController from '../controllers/ProjectController.js'

const router = Router()

router.post('/', ProjectController.create)
router.get('/', ProjectController.list)

router.get('/:id/board', ProjectController.board)

router.patch('/:id', ProjectController.update)
router.delete('/:id', ProjectController.delete)

export default router
