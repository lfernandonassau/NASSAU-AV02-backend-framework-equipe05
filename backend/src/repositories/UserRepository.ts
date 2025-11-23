// src/repositories/UserRepository.ts
import prisma from '../database/prismaClient.js'

export default {
    async createUser(data: {
        name: string
        lastname: string
        cpf: string
        email: string
        password: string
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

}
