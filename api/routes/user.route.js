import express from 'express'
import { verifyToken } from '../middleware/jwt.js'
import { deleteUser, getUser } from '../controller/user.controller.js'

const router = express.Router()

router.delete('/:id', verifyToken, deleteUser)
router.get('/:id', verifyToken, getUser)

export default router
