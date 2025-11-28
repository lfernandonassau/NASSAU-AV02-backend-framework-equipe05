// ProjectService.ts

import ProjectRepository from '../repositories/ProjectRepository.js'
import type { CreateProjectData } from '../repositories/ProjectRepository.js'

interface CreateProjectDTO {
    title: string
    subtitle?: string
    userId: number
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

    const payload: CreateProjectData = {
        title: data.title.trim(),
        ownerId: data.userId,
    }

    if (data.subtitle && data.subtitle.trim()) {
        payload.subtitle = data.subtitle.trim()
    }

    const project = await ProjectRepository.create(payload)
    return project
    },

    async listByOwner(userId: number) {
    return ProjectRepository.listByOwner(userId)
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
    return ProjectRepository.delete(id)
    },
}
