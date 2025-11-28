import RelatoryService from '../services/RelatoryService.js'
import RepositoryService from '../services/RelatoryService.js'
import type { Request, Response } from 'express'

function serializeBigInt(obj: any) {
    return JSON.parse(
        JSON.stringify(obj, (_key, value) =>
            typeof value === 'bigint' ? Number(value) : value
        )
    )
}

export default {

    async list( req:Request,res:Response ) {

        const result = await RelatoryService.list()
        const safeResult = serializeBigInt(result)
        return res.json(safeResult)

    },

    async update( req:Request,res:Response ) {

        const id = Number(req.params.id);
        const data = req.body;

        try {

            const result = await RelatoryService.update(id,data);
            const safeResult = serializeBigInt(result);
            return res.json(safeResult)


        } catch(error) {

        return res.status(400).json( {

            error: "Erro ao atualizar o relatorio"

        } )

        }

    }

}