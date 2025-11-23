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
export function GetUser(cpf : string){

    return prisma.user.findUnique({
        where: {cpf}

    });

}

//Criar um novo usuário no banco de dados.
export function CadastreUser(newUser : any){

    return prisma.user.create({
        data: newUser
    })
}

//Atualizar um usuário específico no banco de dados.
export function UpadateUser(id_user : bigint, newData : any){

    return prisma.user.update({
        where: { id_user },
        data: newData
    })
}


//Deletar um usuário específico no banco de dados.
export function DeleteUser(cpf : string){

    return prisma.user.delete({
        where: {cpf}
        
    })
}