import { PrismaClient } from '@prisma/client';
import sampleData from './sample-data';
// import { hash } from '../lib/encrypt';
 import { hashSync } from 'bcrypt-ts-edge';

async function main() {
    const prisma = new PrismaClient();
    await prisma.dots.deleteMany();
    await prisma.hills.deleteMany();
    await prisma.workouts.deleteMany();
    await prisma.user.deleteMany();


  
    await prisma.dots.createMany({ data: sampleData.dots });



    await prisma.hills.createMany({ data: sampleData.hills });

   

    await prisma.workouts.createMany({ data: sampleData.workouts});




    const users = [];
  for (let i = 0; i < sampleData.users.length; i++) {
    users.push({
      ...sampleData.users[i],
      password: hashSync(sampleData.users[i].password),
    });
    console.log(
      sampleData.users[i].password,
      hashSync(sampleData.users[i].password)
    );
  }

  await prisma.user.createMany({ data: users });

    console.log('Database seeded successfully');
  }
  
  main();