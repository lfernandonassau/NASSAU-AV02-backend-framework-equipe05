import type { Card, TaskStatus } from "@prisma/client";
import ColumnsRepository from "../repositories/ColumnsRepository.js";

interface CreateColumnDTO{
    title: String
    subtitle: String
    status: TaskStatus
    projectId: bigint | number
}

interface updateColumnDTO{
    title?: string
    subtitle?: String
    status?: TaskStatus
    projectId: bigint | number
}

export default{

    //Criar uma coluna, com um título obrigatório
    async create(data: CreateColumnDTO){
        //regra de négocio, título é exirgido.
        if (!data.title){
            throw new Error("Título obrigatório")
        }

        const column = await ColumnsRepository.create(data)
            return column
    },

    //Vai listar as colunas criadas.
    async list(){
        return await ColumnsRepository.list()
    },

    //Deletar uma coluna.
    async delete(id:number){
        return await ColumnsRepository.delete(id)
    }
}