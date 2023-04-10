import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const PORT = 8800

const app = express()

dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    console.log(error)
  }
}

app.listen(PORT, () => {
  connect()
  console.log('backend is running')
})
