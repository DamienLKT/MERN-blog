import mongoose from 'mongoose'


const postSchema = mongoose.Schema(
  {
    User_ID: { //check if required, if required do we display user id or user name?
      type: mongoose.Schema.Types.ObjectId,
      //type: String,
      required: true,
      ref: 'User',
    },
    
    Post_ID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    
    Post_Title: {
      type: String,
      required: true,
    },

    Post_Description: {
      type: String,
      required: true,
    },

    Post_image: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
)

const Post = mongoose.model('Post', postSchema)

export default Post
