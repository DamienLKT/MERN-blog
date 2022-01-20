import mongoose from 'mongoose'


const likedpostSchema = mongoose.Schema(
  {
    User_ID: { //check if required 
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    
    table: {
      type: String,
      required: true,
    },
    
    rows: [{ //check if correct
      User_ID: mongoose.Schema.Types.ObjectId,
      Post_ID: mongoose.Schema.Types.ObjectId,
      required: true,
    }],
    
  },
  {
    timestamps: true,
  }
)

const LikedPost = mongoose.model('LikedPost', likedpostSchema)

export default LikedPost
