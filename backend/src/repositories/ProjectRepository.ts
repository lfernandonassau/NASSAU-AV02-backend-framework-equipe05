import prisma from '../database/prismaClient.js'

export default {
    
    async create(data:any) {
        return prisma.project.create({ data })
    },

    async list() {
        return prisma.project.findMany()
    },

    async update(id: number | bigint, data: any) {
        return prisma.project.update({
            where: { id_project: Number(id) },
            data,
        })
    },

    async delete(id: number) {
        return prisma.project.delete({where: {id_project: Number(id) }})
    }

}
