import prisma from '../database/prismaClient.js'

export default {
    async createInvite(data: {
        projectId: number
        userId: number
        email: string
    }) {
        return prisma.projectInvite.create({
        data: {
            projectId: BigInt(data.projectId),
            userId: BigInt(data.userId),
            email: data.email,
            status: 'PENDING',
        },
        include: {
            project: true,
            user: true,
        },
        })
    },

    async findExistingPending(projectId: number, userId: number) {
        return prisma.projectInvite.findFirst({
        where: {
            projectId: BigInt(projectId),
            userId: BigInt(userId),
            status: 'PENDING',
        },
        })
    },

    async findById(id: number) {
        return prisma.projectInvite.findUnique({
        where: { id: BigInt(id) },
        include: {
            project: true,
            user: true,
        },
        })
    },

    async markAccepted(id: number) {
        return prisma.projectInvite.update({
        where: { id: BigInt(id) },
        data: {
            status: 'ACCEPTED',
            acceptedAt: new Date(),
        },
        })
    },

    async findPendingByUser(userId: number) {
        return prisma.projectInvite.findMany({
        where: {
            userId: BigInt(userId),
            status: 'PENDING',
        },
        include: {
            project: true,
            user: true,
        },
        orderBy: { createdAt: 'desc' },
        })
    },
}
