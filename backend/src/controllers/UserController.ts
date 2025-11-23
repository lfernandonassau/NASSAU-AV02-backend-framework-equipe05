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

}