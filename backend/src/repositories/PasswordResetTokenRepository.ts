import prisma from '../database/prismaClient.js'

export default {
    async createToken(userId: bigint, token: string, expiresAt: Date) {
        return prisma.passwordResetToken.create({
            data: {
                userId,
                token,
                expires_at: expiresAt,
            },
        })
    },

    async findValidToken(token: string) {
        const now = new Date()
        return prisma.passwordResetToken.findFirst({
            where: {
                token,
                used_at: null,
                expires_at: { gt: now },
            },
            include: {
                user: true,
            },
        })
    },

    async markAsUsed(id: bigint) {
        return prisma.passwordResetToken.update({
            where: { id },
            data: {
                used_at: new Date(),
            },
        })
    },
}
