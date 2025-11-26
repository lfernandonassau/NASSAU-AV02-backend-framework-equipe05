import prisma from '../database/prismaClient.js'


export type positionuser= {
    userId: bigint
    jobId: string
}

export default {

    async create(data:any) {
        return prisma.userPosition.create({ data })
    },


    async update(
        keys:{userId: number | bigint; jobId: number | bigint},
        data: Partial<{ userId: bigint; jobId: bigint }>
        ){
        return prisma.userPosition.update({
            where:  {
                userId_jobId: {
                    userId: Number(keys.userId),
                    jobId: Number(keys.jobId)
                },
            },
            data,
        })
    },
}
