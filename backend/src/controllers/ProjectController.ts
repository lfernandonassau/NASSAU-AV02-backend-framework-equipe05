import type { Request, Response } from 'express'
import ProjectService from '../services/ProjectService.js'

function serializeBigInt(obj: any) {
    return JSON.parse(
        JSON.stringify(obj, (_key, value) =>
        typeof value === 'bigint' ? Number(value) : value,
        ),
    )
}

export default {
    async create(req: Request, res: Response) {
        try {
        const userId = (req as any).user.id_user as number

        const result = await ProjectService.create({
            ...req.body,
            userId,
        })

        return res.status(201).json(serializeBigInt(result))
        } catch (err: any) {
        console.error('Erro ao criar projeto:', err)
        return res.status(400).json({ message: err.message })
        }
    },

    async list(req: Request, res: Response) {
        const userId = (req as any).user.id_user as number

        const result = await ProjectService.listByOwner(userId)
        return res.json(serializeBigInt(result))
    },

    async update(req: Request, res: Response) {
        try {
        const id = Number(req.params.id)
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }

        const result = await ProjectService.update(id, req.body)
        return res.json(serializeBigInt(result))
        } catch (err: any) {
        return res.status(400).json({ message: err.message })
        }
    },

    async delete(req: Request, res: Response) {
        try {
        const id = Number(req.params.id)
        if (Number.isNaN(id)) {
            return res.status(400).json({ message: 'ID inválido' })
        }

        const result = await ProjectService.delete(id)
        return res.json(serializeBigInt(result))
        } catch (err: any) {
        return res.status(400).json({ message: err.message })
        }
    },

    // 🔹 NOVO: /projects/:id/board
    async board(req: Request, res: Response) {
        try {
        const projectId = Number(req.params.id)
        if (Number.isNaN(projectId)) {
            return res.status(400).json({ message: 'ID inválido' })
        }

        const userId = (req as any).user.id_user as number

        const board = await ProjectService.getBoardById(projectId, userId)

        return res.json(serializeBigInt(board))
        } catch (err: any) {
        console.error('Erro ao carregar board:', err)
        const message = err?.message || 'Erro ao carregar board'
        if (
            message.includes('não encontrado') ||
            message.includes('não tem acesso')
        ) {
            return res.status(404).json({ message })
        }
        return res.status(400).json({ message })
        }
    },
}
