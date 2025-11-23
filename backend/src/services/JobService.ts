import type { ClassJob, UserPosition } from "@prisma/client"
import JobRepository from "../repositories/JobRepository.js"

interface CreateJobDTO {
    position: ClassJob
    users: UserPosition
}

interface UpdateJobDTO {
    position: ClassJob
    users: UserPosition
}

export default {
    async create(data: CreateJobDTO) {
        // Regra de negócios
        if (!data.position) {
            throw new Error("Cargo obrigatório")
        }

        const project = await JobRepository.create(data)
            return project
    },

    async list() {
        return await JobRepository.list()
    },

    async update(id: number, data: UpdateJobDTO){
        if(!data.position){
            throw new Error('Erro ao atualizar o cargo')
        }
        const updated = await JobRepository.update(id, data)
            return updated
    },
}