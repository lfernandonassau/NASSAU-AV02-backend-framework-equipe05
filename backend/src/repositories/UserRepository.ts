import prisma from '../database/prismaClient.js'

export default {
    async createUser(data: {
        name: string
        lastname: string
        cpf: string
        email: string
        password: string // já deve vir HASH
    }) {
        const user = await prisma.user.create({
            data: {
                name: data.name,
                lastname: data.lastname,
                cpf: data.cpf,
                email: data.email,
                password: data.password,
            },
        })
        return user
    },

    async listUsers() {
        return prisma.user.findMany()
    },

    async findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email },
        })
    },

    async findByCpf(cpf: string) {
        return prisma.user.findUnique({
            where: { cpf },
        })
    },

    async updatePassword(userId: bigint, newPasswordHash: string) {
        return prisma.user.update({
            where: { id_user: userId },
            data: { password: newPasswordHash },
        })
    },
}
