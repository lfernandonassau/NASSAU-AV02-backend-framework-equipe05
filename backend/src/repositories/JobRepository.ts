import type { ClassJob } from '@prisma/client'
import prisma from '../database/prismaClient.js'

export type ProjectRecord = {
    id_job: bigint
    position: ClassJob
    users: bigint
}

export default {

    async create(data: {position : ClassJob}) {
        return prisma.job.create({
            data:{
                position: data.position
        },
        })
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