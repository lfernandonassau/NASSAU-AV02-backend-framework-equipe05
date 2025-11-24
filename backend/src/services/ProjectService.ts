// ProjectService.ts
import ProjectRepository from '../repositories/ProjectRepository.js'

interface CreateProjectDTO {
    title: string
    subtitle?: string
}

interface UpdateProjectDTO {
    title?: string
    subtitle?: string
}

export default {
    async create(data: CreateProjectDTO) {
        if (!data.title || !data.title.trim()) {
            throw new Error('Título obrigatório')
        }

        const payload: { title: string; subtitle?: string } = {
            title: data.title.trim(),
        }

        // Só adiciona subtitle se realmente existir
        if (data.subtitle && data.subtitle.trim()) {
            payload.subtitle = data.subtitle.trim()
        }

        const project = await ProjectRepository.create(payload)
        return project
    },

    async list() {
        return ProjectRepository.list()
    },

    async update(id: number, data: UpdateProjectDTO) {
        if (!data.title && !data.subtitle) {
            throw new Error('Nenhum campo fornecido para atualização')
        }

        const updateData: UpdateProjectDTO = {}

        if (data.title) {
            updateData.title = data.title.trim()
        }

        if (data.subtitle) {
            updateData.subtitle = data.subtitle.trim()
        }

        const project = await ProjectRepository.update(id, updateData)
        return project
    },

    async delete(id: number) {
        const deleted = await ProjectRepository.delete(id)
        return deleted
    },
}
