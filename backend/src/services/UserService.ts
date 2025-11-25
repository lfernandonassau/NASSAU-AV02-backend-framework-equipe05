import bcrypt from 'bcrypt'
import UserRepository from '../repositories/UserRepository.js'

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