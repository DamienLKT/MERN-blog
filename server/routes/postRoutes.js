import express from 'express'
const router = express.Router()
import {
  getPosts,
  getPostsByUserId,
  newPost,
  getPostById,
  updatePost,
  deletePost,
} from '../controllers/postController.js'

router.route('/').get(getPosts).post(newPost).put(updatePost).delete(deletePost)
router.route('/:id').get(getPostById)
router.route('/user/:id').get(getPostsByUserId)

export default router
