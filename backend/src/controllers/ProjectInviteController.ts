
import type { Request, Response } from 'express'
import ProjectInviteService from '../services/ProjectInviteService.js'

function serializeBigInt(obj: any) {
    return JSON.parse(
        JSON.stringify(obj, (_key, value) =>
        typeof value === 'bigint' ? Number(value) : value,
        ),
    )
}

export default {
    async invite(req: Request, res: Response) {
        try {
        const ownerId = (req as any).user.id_user as number
        const { projectId, email } = req.body

        const result = await ProjectInviteService.inviteUser({
            ownerId,
            projectId: Number(projectId),
            email,
        })

        return res.status(201).json(serializeBigInt(result))
        } catch (err: any) {
        console.error('Erro ao enviar convite:', err)
        return res.status(400).json({ message: err.message })
        }
    },

    async listMyInvites(req: Request, res: Response) {
        try {
        const userId = (req as any).user.id_user as number
        const invites = await ProjectInviteService.listMyInvites(userId)
        return res.json(serializeBigInt(invites))
        } catch (err: any) {
        console.error('Erro ao listar convites:', err)
        return res.status(400).json({ message: err.message })
        }
    },

    async accept(req: Request, res: Response) {
        try {
        const userId = (req as any).user.id_user as number
        const inviteId = Number(req.params.id)

        const result = await ProjectInviteService.acceptInvite(inviteId, userId)
        return res.json(serializeBigInt(result))
        } catch (err: any) {
        console.error('Erro ao aceitar convite:', err)
        return res.status(400).json({ message: err.message })
        }
    },
}
