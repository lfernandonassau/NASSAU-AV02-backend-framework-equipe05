import type { TaskStatus } from '@prisma/client'
import prisma from '../database/prismaClient.js'

export default {

    async create(data: any){
        return prisma.column.create({data})
    },

    async list() {
        return prisma.column.findMany()
    },

    async delete(id: number){
        return prisma.column.delete({
            where:({id_column: Number(id)})
        })
    }


}