import {CadastreUser, UpadateUser, GetUser, DeleteUser} from "./UserRepository.js";

//Acesso para o banco.

async function start(){

  const user = await UpadateUser("88899977790", {

    name:"Alanderson",
    lastname:"junior",
    email:"Alanderson45g@gmail.com",
    password:"99897"

  });

  console.log(user);

}
start();



