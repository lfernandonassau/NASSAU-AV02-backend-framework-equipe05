import prisma from '../database/prismaClient.js'
import Prisma from '../database/prismaClient.js'

export type rulesRelatory = {

    id_relat:          BigInt | number     
    datefinaly:        Date
    totaltasks:        BigInt
    tasksPending:      BigInt
    tasksonWalk:       BigInt
    tasksCompleted:    BigInt
    createstatistic:   BigInt

}

export default {

    async list() {

        return prisma.relatory.findMany()

    },

    async update( id:number | bigint, data:any ) {

        return prisma.relatory.update( {

            where: { id_relat:Number(id) },

            data,

        } )

    }

}