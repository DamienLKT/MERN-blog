import mongoose from 'mongoose'

//const reviewSchema = mongoose.Schema(
//  {
//    name: { type: String, required: true },
//    rating: { type: Number, required: true },
//    comment: { type: String, required: true },
//    user: {
//      type: mongoose.Schema.Types.ObjectId,
//      required: true,
//      ref: 'User',
//    },
//  },
//  {
//    timestamps: true,
//  }
//)

const postSchema = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },

    post_id: {
      type: Number,
      required: true,
    },

    post_title: {
      type: String,
      required: true,
    },

    post_description: {
      type: String,
      required: true,
    },

    post_image: {
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
