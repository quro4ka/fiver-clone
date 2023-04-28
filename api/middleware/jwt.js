import jwt from 'jsonwebtoken'
import { createError } from '../utils/createError.js'

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken

  if (!token) {
    return next(createError(301, 'You are not auth'))
  }

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (err) {
      return next(createError(403, 'Token is not veryfied'))
    }

    req.userId = payload.id
    req.isSeller = payload.isSeller

    return next()
  })
}
