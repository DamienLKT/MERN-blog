import express from 'express'
const router = express.Router()

// @route    GET api/posts
// @desc     Get all posts
// @access   Public
router.get('/', async (req, res) => {
  try {
    res.json({ test: 'test' })
    //const posts = await Post.find()
    //res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

export default router
