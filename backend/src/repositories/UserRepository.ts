import prisma from '../database/prismaClient.js'

// Tipos auxiliares pra organizar
interface CreateUserInput {
    name: string
    lastname: string
    cpf: string
    email: string
    password: string
}

interface UpdateUserInput {
    name?: string
    lastname?: string
    cpf?: string
    email?: string
    password?: string // já em HASH
    imagemUrl?: string | null
}

export default {
    async createUser(data: CreateUserInput) {
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

    async update(id: number | bigint, data: UpdateUserInput) {
    const user = await prisma.user.update({
        where: { id_user: BigInt(id) },
        data,
    })
    return user
    },

    async updatePassword(id: number | bigint, newPasswordHash: string) {
    const user = await prisma.user.update({
        where: { id_user: BigInt(id) },
        data: { password: newPasswordHash },
    })
    return user
    },

    async delete(id: number | bigint) {
    return prisma.user.delete({
        where: { id_user: BigInt(id) },
    })
    },
}
