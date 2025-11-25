import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = Router()

//User
router.post('/', UserController.create)
router.get('/', UserController.list)
router.patch('/:id', UserController.update)
router.delete('/:id', UserController.delete)

export default router
