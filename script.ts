import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*async function main() {
  const resultado = await prisma.user.create({
    data:{
      email: 'lola@gmail.com', // cria um user
    },
  });
  console.log(resultado);
}*/

/*async function main() {
  const resultado = await prisma.user.update({
    data:{
      name: 'Lola atualizada', // atualiza um user
    },
    where: {
      id: 4,
    },
  });
  console.log(resultado);
}*/

/*async function main() {
  const resultado = await prisma.post.create({
    data: {
      title: "Hello World" // cria um post
    },
  });
  console.log(resultado);
}*/

/*async function main(){
  const resultado = await prisma.post.update({
    data: {
      author: {
        connect: {
          id: 4, // faz a relação entre post e user
        },
      },
    },
    where: {
      id: 1,
    },
  });
  console.log(resultado);
}*/

/*async function main() {
  const resultado = await prisma.user.findUnique({
    where: {
      email: 'georges@gmail.com', // busca um user expecifico
    },
  });
  console.log(resultado)
}*/

/*async function main() {
  const resultado = await prisma.user.findMany({
    select: {
      id: true,
      name: true, // busca os campo id e name de todos os users
    },
  });
  console.log(resultado);
}*/

/*async function main(){
  const resultado = await prisma.user.findMany({
    include: {
      posts: true, // busca todos os users e também trás a informação do post de cada um
    },
  });
  console.log(JSON.stringify(resultado, null, 1));
}*/

/*async function main(){
  const resultado = await prisma.user.create({
    data:{
      name: 'Vitor Com Post',
      email: 'vitor@gmail.com', // cria um user com um post
      posts: {
        create: {
          title: 'Post do vitor',
        },
      }
    },
  });
  console.log(resultado);
}*/

/*async function main() {
  const resultado = await prisma.user.findMany({
    where: {
      name: {
        startsWith: 'l' // busca todos os users que o name começa com a letra L
      },
    },
  });
  console.log(resultado);
}*/

/*async function main() {
  const resultado = await prisma.user.findMany({
    skip: 0, // ignore x páginas
    take: 3 // me dê x resultados
  });
  console.log(resultado);
}*/

async function main() {
  const resultado = await prisma.user.upsert({
    where: {
      email: 'naoexiste@gmail.com', // busque esse email
    },
    create:{
      name: 'Create Teste', // se não encontrar o email, crie um novo user com esse email
      email: 'naoexiste@gmail.com',
    },
    update: {
      name: 'Update Teste', // se encontrar o email, atualize o name do user
    },
  });
  console.log(resultado);
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
