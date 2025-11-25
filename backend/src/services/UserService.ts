import bcrypt from 'bcrypt'
import UserRepository from '../repositories/UserRepository.js'

interface CreateUserDTO {
    name: string
    lastname: string
    cpf: string
    email: string
    password: string
}

export default {
    async create(data: CreateUserDTO) {
        if (!data.name) {
            throw new Error('Nome obrigatório')
        }
        if (!data.email) {
            throw new Error('Email obrigatório')
        }
        if (!data.password) {
            throw new Error('Senha obrigatória')
        }

        // Verificar se email/cpf já existem
        const existingByEmail = await UserRepository.findByEmail(data.email)
        if (existingByEmail) {
            throw new Error('Email já cadastrado')
        }

        const existingByCpf = await UserRepository.findByCpf(data.cpf)
        if (existingByCpf) {
            throw new Error('CPF já cadastrado')
        }

        // Gerar hash da senha
        const saltRounds = 10
        const passwordHash = await bcrypt.hash(data.password, saltRounds)

        const user = await UserRepository.createUser({
            ...data,
            password: passwordHash,
        })

        const { password, ...userWithoutPassword } = user as any
        return userWithoutPassword
    },

    async list() {
        const users = await UserRepository.listUsers()
        //remover senha da listagem
        return users.map((user: any) => {
            const { password, ...rest } = user
            return rest
        })
    },
}