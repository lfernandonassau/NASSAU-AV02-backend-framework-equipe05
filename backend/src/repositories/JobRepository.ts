import prisma from '../database/prismaClient.js'

export default {

    async create(data:any) {
        return prisma.job.create({ data })
    },

    async list() {
        return prisma.job.findMany()
    },

    async update(id: number | bigint, data: any) {
        return prisma.job.update({
            where: { id_job: Number(id) },
            data,
        })
    },

}