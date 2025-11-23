import ProjectService from '../services/ProjectService.js'
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
        const result = await ProjectService.create(req.body)
        const safeResult = serializeBigInt(result)
    return res.status(201).json(safeResult)
    },

    async list(req: Request, res: Response) {
        const result = await ProjectService.list()
        const safeResult = serializeBigInt(result)
    return res.json(safeResult)
    },

    async update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id)
            const result = await ProjectService.update(id, req.body)
        return res.json(serializeBigInt(result))
        }catch (err: any) {
            return res.status(400).json({ message: err.message })
        }
    },

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id)
        const result = await ProjectService.delete(id)
        const safeResult = serializeBigInt(result)
    return res.json(safeResult)
    },
    
}
