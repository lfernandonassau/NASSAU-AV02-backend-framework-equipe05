import type { TaskStatus } from '@prisma/client'
import prisma from '../database/prismaClient.js'

export default {

    async create(data: any){
        return prisma.card.create({data})
    },

    async list() {
        return prisma.card.findMany()
    },

    async delete(id: number){
        return prisma.card.delete({
            where:({id_card: Number(id)})
        })
    },
    async update(id: number, data: any) {
        const card = await prisma.card.update({
            where: {
                id_card: id, // chave primária id_card 
            },
            data,
        });
        return card;
    }

}