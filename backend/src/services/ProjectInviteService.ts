import prisma from '../database/prismaClient.js'
import ProjectInviteRepository from '../repositories/ProjectInviteRepository.js'

export default {
    async inviteUser(data: {
        ownerId: number
        projectId: number
        email: string
    }) {
        const { ownerId, projectId, email } = data

        if (!email) {
            throw new Error('E-mail é obrigatório.')
        }

        // 1) Verifica se o projeto existe
        const project = await prisma.project.findUnique({
            where: { id_project: BigInt(projectId) },
        })

        if (!project) {
            throw new Error('Projeto não encontrado.')
        }

        // 2) Verifica se o usuário logado é o dono
        if (project.ownerId !== BigInt(ownerId)) {
            throw new Error('Você não é o dono deste projeto.')
        }

        // 3) Busca usuário pelo e-mail
        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            throw new Error('Usuário não encontrado para este e-mail.')
        }

        // 4) Verifica se já existe convite pendente
        const existing = await ProjectInviteRepository.findExistingPending(
            projectId,
            Number(user.id_user),
        )

        if (existing) {
            throw new Error('Já existe um convite pendente para este usuário.')
        }

        // 5) Cria e retorna o convite
        const invite = await ProjectInviteRepository.createInvite({
            projectId,
            userId: Number(user.id_user),
            email,
        })

        return invite
    },

    // -----------------------------------------------------------------------
    // 📌 2) Listar convites do usuário logado
    // -----------------------------------------------------------------------
    async listMyInvites(userId: number) {
        return ProjectInviteRepository.findPendingByUser(userId)
    },

    // -----------------------------------------------------------------------
    // 📌 3) Aceitar convite (COM TRANSAÇÃO — versão sólida)
    // -----------------------------------------------------------------------
    async acceptInvite(inviteId: number, userId: number) {
        return prisma.$transaction(async (tx) => {
            // 1) Busca o convite completo
            const invite = await tx.projectInvite.findUnique({
                where: { id: BigInt(inviteId) },
            })

            if (!invite) {
                throw new Error('Convite não encontrado.')
            }

            if (Number(invite.userId) !== userId) {
                throw new Error('Você não tem permissão para este convite.')
            }

            if (invite.status !== 'PENDING') {
                throw new Error('Este convite já foi processado.')
            }

            // 2) Marca convite como aceito
            await tx.projectInvite.update({
                where: { id: BigInt(inviteId) },
                data: {
                    status: 'ACCEPTED',
                    acceptedAt: new Date(),
                },
            })

            // 3) Garante JOB de MEMBERS no projeto
            let membersJob = await tx.job.findFirst({
                where: {
                    projectId: invite.projectId,
                    position: 'MEMBERS',
                },
            })

            if (!membersJob) {
                membersJob = await tx.job.create({
                    data: {
                        position: 'MEMBERS',
                        projectId: invite.projectId,
                    },
                })
            }

            // 4) Cria vínculo N:N — UserPosition
            await tx.userPosition.upsert({
                where: {
                    userId_jobId: {
                        userId: invite.userId,
                        jobId: membersJob.id_job,
                    },
                },
                update: {},
                create: {
                    userId: invite.userId,
                    jobId: membersJob.id_job,
                },
            })

            return {
                inviteId,
                projectId: invite.projectId,
                jobId: membersJob.id_job,
            }
        })
    },
}
