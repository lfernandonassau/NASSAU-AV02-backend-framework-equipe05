// src/repositories/UserRepository.ts
import prisma from '../database/prismaClient.js'

//Vai fazer uma exportação de obejetos para o banco de dados.
export default {
    
    async createUser(data: {
        id_user: bigint
        name: string
        lastname: string
        cpf: string
        email: string
        password: string
    }) {
        const user = await prisma.user.create({
            data: {
                id_user: data.id_user,
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

    async update(id: number | bigint, data: any) {
        return prisma.user.update({
            where: { id_user: Number(id) },
            data,
        })
    },

    async delete(id: number) {
        return prisma.user.delete({
            where: {id_user: Number(id)}
        })
    }

}
