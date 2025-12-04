import prisma from '../database/prismaClient.js'

// type auxiliar pra criação
export type CreateProjectData = {
    title: string
    subtitle?: string
    ownerId: number
}

export default {
    async create(data: CreateProjectData) {
            const ownerIdBigInt = BigInt(data.ownerId)

            return prisma.$transaction(async (tx) => {
                // 1) Cria o projeto normalmente
                const project = await tx.project.create({
                    data: {
                        title: data.title,
                        ...(data.subtitle !== undefined && { subtitle: data.subtitle }),
                        ownerId: ownerIdBigInt,
                    },
                })

                // 2) Cria as 3 colunas padrão do board desse projeto
                //    (ajuste os títulos se quiser outro texto no front)
                await tx.column.createMany({
                    data: [
                        {
                            title: 'Pendentes',
                            subtitle: 'Tarefas ainda não iniciadas',
                            status: 'PENDENTE',
                            projectId: project.id_project,
                        },
                        {
                            title: 'Em andamento',
                            subtitle: 'Tarefas em execução',
                            status: 'EM_ANDAMENTO',
                            projectId: project.id_project,
                        },
                        {
                            title: 'Concluídos',
                            subtitle: 'Tarefas finalizadas',
                            status: 'CONCLUIDO',
                            projectId: project.id_project,
                        },
                    ],
                })

                // 3) Cria o JOB de LEADER para esse projeto
                const leaderJob = await tx.job.create({
                    data: {
                        position: 'LEADER',
                        projectId: project.id_project,
                    },
                })

                // 4) Vincula o dono do projeto a esse JOB como UserPosition
                await tx.userPosition.create({
                    data: {
                        userId: ownerIdBigInt,
                        jobId: leaderJob.id_job,
                    },
                })

                return project
            })
        },

    async listByOwner(userId: number) {
        return prisma.project.findMany({
        where: {
            ownerId: BigInt(userId),
        },
        orderBy: {
            id_project: 'asc',
        },
        })
    },

    async update(id: number | bigint, data: { title?: string; subtitle?: string }) {
        const project = await prisma.project.update({
        where: { id_project: Number(id) },
        data: {
            ...(data.title !== undefined && { title: data.title }),
            ...(data.subtitle !== undefined && { subtitle: data.subtitle }),
        },
        })
        return project
    },

    async delete(id: number | bigint) {
        const projectId = Number(id)

        return prisma.$transaction(async (tx) => {
            // 1) Apaga UserPosition vinculado a jobs desse projeto
            await tx.userPosition.deleteMany({
            where: {
                job: {
                projectId: projectId,
                },
            },
            })

            // 2) Apaga Jobs do projeto
            await tx.job.deleteMany({
            where: {
                projectId: projectId,
            },
            })

            // 3) Apaga Cards
            await tx.card.deleteMany({
            where: {
                column: {
                projectId: projectId,
                },
            },
            })

            // 4) Apaga Colunas
            await tx.column.deleteMany({
            where: {
                projectId: projectId,
            },
            })

            // 5) Apaga Invites
            await tx.projectInvite.deleteMany({
            where: {
                projectId: projectId,
            },
            })

            // 6) Apaga Relatory (se tiver)
            await tx.relatory.deleteMany({
            where: {
                projectId: projectId,
            },
            })

            // 7) Finalmente, o Project
            return tx.project.delete({
            where: {
                id_project: projectId,
            },
            })
        })
        },

    //buscar o "board" (projeto + colunas + cards)
    async findBoardById(projectId: number, ownerId: number) {
        return prisma.project.findFirst({
        where: {
            id_project: BigInt(projectId),
            ownerId: BigInt(ownerId),
        },
        include: {
            column: {
            orderBy: { id_column: 'asc' },
            include: {
                cards: {
                orderBy: { id_card: 'asc' },
                },
            },
            },
        },
        })
    },
}
