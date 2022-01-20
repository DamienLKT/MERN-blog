import Post from '../models/postModel.js'

// @route    GET api/posts
// @desc     Get all posts
// @access   Public

const newPost = async(req,res) => {

    const post_id = req.body.Post_ID; //replace id generator
    const title = req.body.Post_Title;
    const description = req.body.Post_Description;
    const image = req.body.Post_image;
    
    try{
        await Post.create({
                Post_ID: post_id,
                Post_Title: title,
                Post_Description: description,
                Post_image = image,
        });
       // await Post.save();
        console.log(Post);
    }
    catch(e){
        console.log(e.message);
    }
 
}

export { newPost }