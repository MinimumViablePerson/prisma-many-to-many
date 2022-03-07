import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createStuff () {

  

  await prisma.song.create({
    data: {
      title: 'POTATOES!',
      artists: {
        connectOrCreate: {
          create: { name: 'MR POTATO HEAD' },
          where: { name: 'MR POTATO HEAD' }
        }
      }
    }
  })
}

createStuff()
