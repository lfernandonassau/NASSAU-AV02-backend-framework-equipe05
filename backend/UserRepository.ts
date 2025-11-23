import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function connect(){
    await prisma.$connect();
}

connect();
// Fazer teste com operador de comparaça OR
//  ##CRUD do usuário:##

//Consultador todos os usuários no banco de dados.
export function GetUsers(){

    return prisma.user.findMany();

}

//Consultar um usuário específico no banco de dados.
//Consulta com a chave principal e unica que é o email do usuário
export function GetUser(id_user: bigint){

    return prisma.user.findFirst({

        where:{id_user}

    });
}

//Criar um novo usuário no banco de dados.
export function CadastreUser(newUser : any){

    return prisma.user.create({
        data: newUser
    })
}

//Atualizar um usuário específico no banco de dados.
export function UpadateUser(id_user: bigint, newData : any){

    return prisma.user.update({
        where: {id_user},
        data: newData
    })
}


//Deletar um usuário específico no banco de dados.
export function DeleteUser(id_user : bigint){

    return prisma.user.delete({
    where: {id_user}
    })

}