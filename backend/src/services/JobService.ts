import type { ClassJob, UserPosition } from "@prisma/client"
import JobRepository from "../repositories/JobRepository.js"

interface CreateJobDTO {
    name: string
    position: ClassJob
    users: UserPosition
}

interface UpdateJobDTO {
    name: string
    position?: ClassJob
    users?: UserPosition
}

export default {
    async create(data: CreateJobDTO) {
        const job = await JobRepository.create(data)
            return job
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