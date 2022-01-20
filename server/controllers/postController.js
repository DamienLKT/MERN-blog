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
    const posts = await Post.find({ User_ID: req.params.id })
    res.json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
}

// @route    PUT api/posts
// @desc     Add new post
// @access   Private
const newPost = async (req, res) => {
  const post_id = req.body.Post_ID //replace id generator
  const title = req.body.Post_Title
  const description = req.body.Post_Description
  const image = req.body.Post_image

  try {
    await Post.create({
      Post_ID: post_id,
      Post_Title: title,
      Post_Description: description,
      Post_image: image,
    })
  } catch (e) {
    console.log(e.message)
  }
}

export { newPost, getPosts, getPostsByUserId }
