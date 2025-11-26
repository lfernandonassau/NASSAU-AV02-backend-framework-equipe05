import UserPositionRepository from "../repositories/UserPositionRepository.js"

interface CreateJobDTO {
    jobId : BigInt
    userId : BigInt
}

interface UpdateJobDTO {
    jobId : BigInt
    userId : BigInt
}

export default {
    async create(data: CreateJobDTO) {
        // Regra de negócios
        if (!data.jobId && !data.userId) {
            throw new Error(" Id usuário e Id do cargo é obrigatório")
        }

        const project = await UserPositionRepository.create(data)
            return project
    },

    async update(id: number, data: UpdateJobDTO){
        if(data.userId && !data.jobId ){
            throw new Error('Erro ao atualizar, Id do usuário e cargo não corresponde')
        }
        const updated = await UserPositionRepository.update(id, data)
            return updated
    },
}