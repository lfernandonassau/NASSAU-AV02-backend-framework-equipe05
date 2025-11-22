import {CadastreUser, UpadateUser, GetUser, DeleteUser} from "./UserRepository.js";

//Acesso para o banco.

async function start(){

  const user = await CadastreUser({

    name:"Julinha",
    lastname:"Santos",
    email:"julia@gmail.com",
    password:"9909",
    cpf:"88899966689"

  });

  console.log(user);

}
start();



