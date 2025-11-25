// src/routes/authRoutes.ts
import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'

const router = Router()

router.post('/login', AuthController.login)
router.post('/forgot-password', AuthController.forgotPassword)
router.post('/reset-password', AuthController.resetPassword)

export default router
