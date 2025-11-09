import 'dotenv/config';
//Chamamos a Classe -PrismaClient- do Pacote @Prisma/Cliente
//O Prisma Cliente é uma gerador de código, utilizando nodejs/typescrip, para fazer,
//consultas no banco de dados, se adaptando de forma automatica ao -SCHEMA.PRISMA-
import { PrismaClient } from './prisma/generated/client.js'


//Criamos uma variável 'Prisma' para instânciar o 'PrismaCliente'
const prisma = new PrismaClient()

//Função que interage com o banco de dados que será inscrito
async function main() {

  //Este é o local onde você colocaria as suas consultas reais 
  // ao banco de dados usando a instância prisma.
try {
    await prisma.user.create({
      data:{
        name:'Alan',
        email: 'Alanderson@gmail.com',
        posts:{
          create: {title: 'Ola mundo, bem vindo ao SQL no Prisma'},
        },
        profile:{
          create: {bio: 'Eu amo programa, em bando de dados'},
        },
      },
    })
  } catch (e: any) {
    // Evita quebrar o --watch quando o e-mail único já existe:
    if (e?.code === 'P2002' && e?.meta?.target === 'User_email_key') {
      console.log('Usuário já existe (email único). Seguindo sem criar duplicado…');
    } else {
      // Se for outro erro, deixamos subir para o .catch global abaixo
      throw e;
    }
  }

  const TodosUsuarios = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true,
    },
  })

  console.dir(TodosUsuarios,{depth: null} )
}




//Função principal é chamada para iniciar a execução do programa.
main()

//Este bloco é executado se a função main() for concluída com sucesso (a Promise for resolvida).
  .then(async () => {

    //Método chamado para encerrar a conexão com o Banco de Dados.
    await prisma.$disconnect()
  })

//Este bloco é executado se ocorrer um erro (a Promise for rejeitada) em qualquer lugar dentro da função main().
  .catch(async (e) => {

    //Imprimir o erro na tela .
    console.error(e)

    //Mesmo em caso de erro é importante encerrar a conexão com o bando de dados.
    await prisma.$disconnect()

    //Encerra o processo Node.js com um código de saída de erro (1), indicando que o script falhou.
    process.exit(1)
  })
  



