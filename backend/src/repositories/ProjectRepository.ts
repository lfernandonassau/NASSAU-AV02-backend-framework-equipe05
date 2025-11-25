import prisma from '../database/prismaClient.js'

export type ProjectRecord = {
    id_project: bigint
    title: string
    subtitle: string | null
}

export default {
    async create(data: { title: string; subtitle?: string }) {
        return prisma.project.create({ data })
    },

    async list() {
        return prisma.project.findMany({
            orderBy: { id_project: 'asc' },
        })
    },

    async update(id: number | bigint, data: { title?: string; subtitle?: string }) {
        const project = await prisma.project.update({
            where: { id_project: Number(id) },
            data: {
                ...(data.title !== undefined && { title: data.title }),
                ...(data.subtitle !== undefined && { subtitle: data.subtitle }),
            },
        })
        return project
    },

    async delete(id: number | bigint) {
        const project = await prisma.project.delete({
            where: { id_project: Number(id) },
        })
        return project
    },
}
