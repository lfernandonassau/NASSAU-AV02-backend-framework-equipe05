import bcrypt from 'bcrypt'
import UserRepository from '../repositories/UserRepository.js'

interface CreateUserDTO {
    name: string
    lastname: string
    cpf: string
    email: string
    password: string
}

interface UpdateUserDTO {
    id_user?: bigint
    name?: string
    lastname?: string
    cpf?: string
    email?: string
    password?: string
}



export default {
    async create(data: CreateUserDTO) {
    // Regra básica
    if (!data.email) {
        throw new Error('E-mail obrigatório')
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

    // não devolver password
    const { password, ...userWithoutPassword } = user as any
    return userWithoutPassword
    },

    async list() {
    const users = await UserRepository.listUsers()

    // remover senha da listagem
    return users.map((user: any) => {
        const { password, ...rest } = user
        return rest
    })
    },

    async update(id: number, data: UpdateUserDTO) {
        const updated = await UserRepository.update(id, data)
        return updated
    },

    async delete(id: number) {
    return await UserRepository.delete(id)
    },
}
