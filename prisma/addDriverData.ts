import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function createStuff () {
  await prisma.driver.create({ data: { name: 'Nicolas' } })
  await prisma.passenger.create({ data: { name: 'Ed' } })
  await prisma.ride.create({
    data: {
      passenger: {
        connect: { name: 'Ed' }
      },
      driver: {
        connect: { name: 'Nicolas' }
      },
      rating: 2,
      comment: 'This time Nico smelled bad!'
    }
  })
}

createStuff()
