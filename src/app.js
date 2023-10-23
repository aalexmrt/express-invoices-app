import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import cors from 'cors'

import v1Router from '#routes/v1/index.js'

import { mongooseConnection } from './databases/database.js'

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

mongooseConnection()

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/api/v1', v1Router)

app.get('/', (req, res) => {
  res.send(`<h1>Hello!</h1>`)
})

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`)
})
