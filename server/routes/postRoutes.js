import express from 'express'
const router = express.Router()
import {
  getPosts,
  getPostsByUserId,
  newPost,
  getPostById,
} from '../controllers/postController.js'

router.route('/').get(getPosts).post(newPost)
router.route('/:id').get(getPostById)
router.route('/user/:id').get(getPostsByUserId)

export default router
