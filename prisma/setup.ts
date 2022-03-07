import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const artists = [
  {
    name: 'Adriano',
    songs: { create: [{ title: 'Por favor' }, { title: 'Ballakume' }] }
  },
  {
    name: 'Nicolas',
    songs: { create: [{ title: 'A' }, { title: 'B' }, { title: 'C' }] }
  },
  {
    name: 'Ed',
    songs: { create: [{ title: 'Ode to Nico' }, { title: 'Nico to Ode' }] }
  }
]

async function createStuff () {
  for (const artist of artists) {
    await prisma.artist.create({
      data: {
        name: 'Adriano',
        songs: { create: [{ title: 'Por favor' }, { title: 'Ballakume' }] }
      }
    })
  }
}

createStuff()
