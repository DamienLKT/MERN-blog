import express from 'express'
const router = express.Router()
import { getPosts } from '../controllers/postController.js'
import { newPosts } from '../controllers/newpostController.js'

router.route('/').get(getPosts);
router.route('/').post(newPosts);

export default router
