import UserService from '../services/UserService.js'
import type { Request, Response } from 'express'

function serializeBigInt(obj: any) {
    return JSON.parse(
    JSON.stringify(obj, (_key, value) =>
        typeof value === 'bigint' ? Number(value) : value
    )
    )
}

export default {

    async create(req: Request, res: Response) {
        const result = await UserService.create(req.body)
        return res.status(201).json(serializeBigInt(result))
    },
    async list(req: Request, res: Response) {
        const result = await UserService.list()
        return res.json(serializeBigInt(result))
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await UserService.update(id, req.body)
        return res.json(serializeBigInt(result))
        }catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    },

    async delete(req: Request, res: Response) {
            const id = Number(req.params.id)
            const result = await UserService.delete(id)
            const safeResult = serializeBigInt(result)
        return res.json(safeResult)
    },

}