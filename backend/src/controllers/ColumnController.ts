import ColumnService from '../services/ColumnService.js'
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
        const result = await ColumnService.create(req.body)
        const safeResult = serializeBigInt(result)
    return res.status(201).json(safeResult)
    },

    async list(req: Request, res: Response) {
        const result = await ColumnService.list()
        const safeResult = serializeBigInt(result)
    return res.json(safeResult)
    },

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id)
        const result = await ColumnService.delete(id)
        const safeResult = serializeBigInt(result)
    return res.json(safeResult)
    },
}