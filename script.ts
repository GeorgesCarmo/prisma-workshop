import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
/*async function main() {
  const resultado = await prisma.user.create({
    data:{
      email: 'lola@gmail.com',
    },
  });
  console.log(resultado);
}*/

async function main() {
  const resultado = await prisma.user.update({
    data:{
      name: 'Lola atualizada',
    },
    where: {
      id: 4,
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
