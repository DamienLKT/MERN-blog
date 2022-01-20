import mongoose from 'mongoose'

const postcommentSchema = mongoose.Schema(
  {
    Comment_ID: { 
      type: mongoose.Schema.Types.ObjectId,
      //type: String,
      required: true,
    },

    User_ID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    
    Post_ID: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Post'
    },
    
    Comment: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
)

const PostComment = mongoose.model('PostComment', postcommentSchema)

export default PostComment
