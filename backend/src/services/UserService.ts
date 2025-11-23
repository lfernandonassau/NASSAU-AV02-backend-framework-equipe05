import UserRepository from '../repositories/UserRepository.js'

//
interface CreateUserDTO {
    name: string
    lastname: string
    cpf: string
    email: string
    password: string
}

export default {
    async create(data: CreateUserDTO) {
        // Regra de negócios
        if (!data.name) {
            throw new Error("Nome obrigatório")
        }
        const user = await UserRepository.createUser(data)
            return user
    },
    async list() {
        return await UserRepository.listUsers()
    }

}
