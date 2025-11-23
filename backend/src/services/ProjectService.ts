import ProjectRepository from '../repositories/ProjectRepository.js'

//
interface CreateProjectDTO {
    titulo: string
    dashboardId: bigint | number
}

interface UpdateProjectDTO {
    titulo?: string
    dashboardId?: number
}

export default {
    async create(data: CreateProjectDTO) {
        // Regra de negócios
        if (!data.titulo) {
            throw new Error("Título obrigatório")
        }

        const project = await ProjectRepository.create(data)
            return project
    },

    async list() {
        return await ProjectRepository.list()
    },

    async update(id: number, data: UpdateProjectDTO){
        if(!data.titulo && !data.dashboardId){
            throw new Error('Oq sobra pro betinha?')
        }
        const updated = await ProjectRepository.update(id, data)
            return updated
    },

    async delete(id: number){
        return await ProjectRepository.delete(id)
    }
}
