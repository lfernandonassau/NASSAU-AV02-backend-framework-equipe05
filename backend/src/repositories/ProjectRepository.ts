import prisma from '../database/prismaClient.js'

// type auxiliar pra criação
export type CreateProjectData = {
    title: string
    subtitle?: string
    ownerId: number
}

export default {
    async create(data: CreateProjectData) {
    return prisma.project.create({
        data: {
        title: data.title,
        // subtitle só se vier
        ...(data.subtitle !== undefined && { subtitle: data.subtitle }),
        ownerId: data.ownerId,
        },
    })
    },

    async listByOwner(userId: number) {
    return prisma.project.findMany({
        where: {
        ownerId: BigInt(userId),
        },
        orderBy: {
        id_project: 'asc',
        },
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
