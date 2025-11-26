import { Router } from 'express'
import UserPositionControler from '../controllers/UserPositionController.js'

const router = Router()

//User
router.post('/', UserPositionControler.create)
router.get('/:id', UserPositionControler.update)


export default router
