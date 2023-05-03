import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import userRoute from './routes/user.route.js'
import authRoute from './routes/auth.route.js'
import gigRoute from './routes/gig.route.js'
import reviewRoute from './routes/review.route.js'

const PORT = 8800
dotenv.config()

const app = express()

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  }),
)
app.use(express.json())
app.use(cookieParser())

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
  } catch (error) {
    console.log(error)
  }
}

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/gigs', gigRoute)
app.use('/api/reviews', reviewRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || 'Something went wrong'

  return res.status(errorStatus).send(errorMessage)
})

app.listen(PORT, () => {
  connect()
  console.log('backend is running')
})
