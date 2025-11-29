import ProjectRepository, {
  type CreateProjectData
} from '../repositories/ProjectRepository.js'


type CreateProjectInput = {
    title: string
    subtitle?: string
    userId: number
    }

    export default {
    async create(data: CreateProjectInput) {
        if (!data.title) {
        throw new Error('Título do projeto é obrigatório.')
        }

        // monta o payload respeitando o tipo CreateProjectData
        const payload: CreateProjectData = {
        title: data.title,
        ownerId: data.userId,
        // NÃO forçamos subtitle aqui, deixamos o opcional agir
        ...(data.subtitle !== undefined && { subtitle: data.subtitle }),
        }

        const project = await ProjectRepository.create(payload)
        return project
    },

    async listByOwner(userId: number) {
        return ProjectRepository.listByOwner(userId)
    },

    async update(id: number, data: { title?: string; subtitle?: string }) {
        return ProjectRepository.update(id, data)
    },

    async delete(id: number) {
        return ProjectRepository.delete(id)
    },

    async getBoardById(projectId: number, userId: number) {
        const board = await ProjectRepository.findBoardById(projectId, userId)

        if (!board) {
        throw new Error(
            'Projeto não encontrado ou você não tem acesso a ele.',
        )
        }

        return board
    },
}
