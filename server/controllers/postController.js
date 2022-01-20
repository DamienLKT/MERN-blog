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

// @route    GET api/posts/:id
// @desc     Get user's posts
// @access   Private
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id)
    res.json(post)
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

const updatePost = async(req,res) => {
  const post_id = req.body.Post_ID; 
  const title = req.body.Post_Title;
  const description = req.body.Post_Description;
  const image = req.body.Post_image;

  try{
      const post = await Post.findByIdAndUpdate( req.body.Post_ID,{  
              Post_Title: title,
              Post_Description: description,
              Post_image = image,
            }
      );
     // await Post.save();
     res.json(post);
  
  }
  catch(e){
      console.log(e.message);
  }

}

const deletePost = async(req,res) => {
  const post_id = req.body.Post_ID; 
  try{
      const del_post = await Post.deleteOne({
              Post_ID: post_id,
      });
     // await Post.save();
     res.json(del_post);
      
  }
  catch(e){
      console.log(e.message);
  }

}

export { newPost, getPosts, getPostById, getPostsByUserId, updatePost, deletePost}
