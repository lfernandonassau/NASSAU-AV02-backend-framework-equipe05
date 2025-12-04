// src/routes/user.routes.ts
import { Router } from 'express'
import UserController from '../controllers/UserController.js'
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated.js'

const router = Router()


// rotas publicas
router.post('/', UserController.create)
router.get('/', UserController.list)

//Apenas quando user estiver logado/rotas privadas
router.get('/me', ensureAuthenticated, UserController.me)
router.put('/me', ensureAuthenticated, UserController.updateMe)

export default router
