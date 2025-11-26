import type { Request, Response } from 'express'
import UserPositionService from '../services/UserPositionService.js'

function serializeBigInt(obj: any) {
    return JSON.parse(
    JSON.stringify(obj, (_key, value) =>
        typeof value === 'bigint' ? Number(value) : value
    )
    )
}

export default {

    async create(req: Request, res: Response) {
        const result = await UserPositionService.create(req.body)
        const safeResult = serializeBigInt(result)
    return res.status(201).json(safeResult)
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await UserPositionService.update(id, req.body)
        return res.json(serializeBigInt(result))
        }catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    },
}