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

interface UpdateProfileDTO{
    name?: string
    lastname?: string
    cpf?: string
    email?: string
    bio?: string
    imagemUrl?: string
}



export default {
    async create(data: CreateUserDTO) {

    //Normaliza o CPF para apenas dígitos
    const cleanCpf = data.cpf.replace(/\D/g, ''); // remove tudo que NÃO é número
    if (cleanCpf.length !== 11) {
    throw new Error('CPF inválido');
    }

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
    // Criar user usando o CPF limpo
    const user = await UserRepository.createUser({
        ...data,
        cpf: cleanCpf,
        password: passwordHash,
    })
    const { password, ...userWithoutPassword } = user as any;
    return userWithoutPassword;
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

    async updateProfile(id: number, input: UpdateProfileDTO) {
        // objeto que realmente será enviado para o Prisma
        const data: UpdateProfileDTO = {}

        //só copia o que realmente veio definido na requisição
        if (input.name !== undefined) data.name = input.name
        if (input.lastname !== undefined) data.lastname = input.lastname
        if (input.email !== undefined) data.email = input.email
        // pode sim, discuta com a lei 🤬 (clbc Alan)
        if (input.cpf !== undefined) data.cpf = input.cpf
        if (input.bio !== undefined) data.bio = input.bio
        if (input.imagemUrl !== undefined) data.imagemUrl = input.imagemUrl

        const updated = await UserRepository.update(id, data)
        return updated
        },

    async delete(id: number) {
    return await UserRepository.delete(id)
    },

    async findById(id: number | bigint) {
        const user = await UserRepository.findById(id)
        if (!user) {
            throw new Error('Usuário não encontrado')
        }
        const { password, ...rest } = user as any
        return rest
    }
}
