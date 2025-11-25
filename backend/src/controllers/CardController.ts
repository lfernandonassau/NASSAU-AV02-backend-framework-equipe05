import CardService from '../services/CardService.js'
import type { Request, Response } from 'express'

// Função auxiliar para lidar com o BigInt do Prisma ao converter para JSON
function serializeBigInt(obj: any) {
    return JSON.parse(
        JSON.stringify(obj, (_key, value) =>
            typeof value === 'bigint' ? Number(value) : value
        )
    )
}

export default {

    async create(req: Request, res: Response) {
        const result = await CardService.create(req.body)
        const safeResult = serializeBigInt(result)
        return res.status(201).json(safeResult)
    },

    async list(req: Request, res: Response) {
        const result = await CardService.list()
        const safeResult = serializeBigInt(result)
        return res.json(safeResult)
    },

    async delete(req: Request, res: Response) {
        const id = Number(req.params.id)
        const result = await CardService.delete(id)
        const safeResult = serializeBigInt(result)
        return res.json(safeResult)
    },

    async update(req: Request, res: Response) {
        const id = Number(req.params.id);
        const data = req.body;
        
        try {
            const result = await CardService.update(id, data);
            const safeResult = serializeBigInt(result);
            return res.json(safeResult);
        } catch (error) {
            // É boa prática tratar erro caso o ID não exista
            return res.status(400).json({ error: "Erro ao atualizar card" });
        }
    },
}