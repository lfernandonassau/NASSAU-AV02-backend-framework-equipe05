import JobService from '../services/JobService.js'
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
        const result = await JobService.create(req.body)
        const safeResult = serializeBigInt(result)
    return res.status(201).json(safeResult)
    },

    async list(req: Request, res: Response) {
        const result = await JobService.list()
        const safeResult = serializeBigInt(result)
    return res.json(safeResult)
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await JobService.update(id, req.body)
        return res.json(serializeBigInt(result))
        }catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    },
}
