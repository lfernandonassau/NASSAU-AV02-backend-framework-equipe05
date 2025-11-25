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
        const result = await ProjectService.create(req.body)
        return res.status(201).json(serializeBigInt(result))
    } catch (err: any) {
        return res.status(400).json({ message: err.message })
    }
    },

    async list(_req: Request, res: Response) {
    const result = await ProjectService.list()
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
}
