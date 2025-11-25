import UserRepository from '../repositories/UserRepository.js'

//
interface CreateUserDTO {
    
    name: string
    lastname: string
    cpf: string
    email: string
    password: string
}

interface UpdateUserDTO{

    id_user: bigint
    name: string
    lastname: string
    cpf: string
    email: string
    password: string
}

export default {
    async create(data: CreateUserDTO) {
        // Regra de negócios
        if (!data.email) {
            throw new Error("E-mail obrigatório")
        }
        const user = await UserRepository.createUser(data)
            return user
    },
    async list() {
        return await UserRepository.listUsers()
    },

    async update(id: number, data: UpdateUserDTO){
        if(!data.id_user){
            throw new Error('Usuário não corresponde!')
        }
        const updated = await UserRepository.update(id, data)
            return updated
    },

        async delete(id: number){
            return await UserRepository.delete(id)
        }

}
