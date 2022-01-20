import express from 'express'
const router = express.Router()
import { getPosts, getPostsByUserId } from '../controllers/postController.js'

router.route('/').get(getPosts)
router.route('/user/:id').get(getPostsByUserId)

export default router
