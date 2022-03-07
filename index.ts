import express from 'express'
import cors from 'cors'

import { PrismaClient } from '@prisma/client'

const app = express()
app.use(cors())
app.use(express.json())

const prisma = new PrismaClient()

app.get('/artists', async (req, res) => {
  const artists = await prisma.artist.findMany({ include: { songs: true } })
  res.send(artists)
})

app.get('/drivers', async (req, res) => {
  const drivers = await prisma.driver.findMany({
    include: { ride: { include: { passenger: true } } }
  })
  res.send(drivers)
})

app.listen(4000, () => {
  console.log(`Server up: http://localhost:4000`)
})
