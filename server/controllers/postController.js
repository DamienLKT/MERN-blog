import Post from '../models/postModel.js'

// @route    GET api/posts
// @desc     Get all posts
// @access   Public
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

// @route    GET api/posts/user/:id
// @desc     Get user's posts
// @access   Private
const getPostsByUserId = async (req, res) => {
  try {
    const posts = await Post.find({})
    res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

export { getPosts, getPostsByUserId }
