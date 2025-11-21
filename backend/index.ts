import {CadastreUser, UpadateUser, GetUser, DeleteUser} from "./UserRepository.js";

//Acesso para o banco.

async function start(){

  const user = await UpadateUser(1n,{

    name:"Julia",
    lastname:"Terezinhão",
    email:"julia@gmail.com",
    password:"9990",
    cpf:"88899966689"


  });

  console.log(user);

}
start();



