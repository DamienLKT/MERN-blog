import express from 'express'
const router = express.Router()
import {
  getPosts,
  getPostsByUserId,
  newPosts,
} from '../controllers/postController.js'

router.route('/').get(getPosts)
router.route('/').post(newPosts)
router.route('/user/:id').get(getPostsByUserId)

export default router
