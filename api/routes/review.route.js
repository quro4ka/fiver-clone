import express from 'express'
import { verifyToken } from '../middleware/jwt.js'
import { createReview, deleteReview, getReviews } from '../controller/review.controller.js'

const router = express.Router()

router.post('/', verifyToken, createReview)
router.delete('/:id', verifyToken, deleteReview)
router.get('/:gigId', getReviews)

export default router
