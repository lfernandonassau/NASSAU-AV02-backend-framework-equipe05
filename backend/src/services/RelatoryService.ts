import RelatoryRepository from "../repositories/RelatoryRepository.js";

interface updateRelatoryDTO {
    
    datefinaly?:        Date
    totaltasks?:        BigInt
    tasksPending?:      BigInt
    tasksonWalk?:       BigInt
    tasksCompleted?:    BigInt
    createstatistic?:   BigInt
    managementpanelId:  BigInt | number  
    projectId:          BigInt | number

}


export default {

    async list(){

        return await RelatoryRepository.list() 

    },

    async update( id:number, data:any ) {

        const relatory = await RelatoryRepository.update(id,data)

        return relatory 

    }

}