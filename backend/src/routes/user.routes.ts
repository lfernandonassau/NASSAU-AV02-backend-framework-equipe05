import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const router = Router()

//Projects
router.post('/', UserController.create)
router.get('/', UserController.list)


export default router
