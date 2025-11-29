import { Router } from 'express'
import ProjectInviteController from '../controllers/ProjectInviteController.js'

const router = Router()

// leader convida (body: { projectId, email })
router.post('/', ProjectInviteController.invite)

// usuário logado vê convites pendentes dele
router.get('/me', ProjectInviteController.listMyInvites)

// usuário aceita um convite
router.post('/:id/accept', ProjectInviteController.accept)

export default router
