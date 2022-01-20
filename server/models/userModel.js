import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = mongoose.Schema(
  {
    User_ID: {
      type: Number,
      required: true,
    },

    Name: {
      type: String,
      required: true,
    },

    Age: {
      type: Number,
      required: true,
    },

    Birthday: {
      type: Date,
      required: true,
    },

    Email: {
      type: String,
      required: true,
      unique: true,
    },

    Phone: {
      type: String,
      required: true,
      unique: true,
    },

    City: {
      type: String,
      required: true,
    },

    Country: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

userSchema.methods.matchPassword = function (enteredPassword) {
  return enteredPassword === this.password
}
// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password)
// }

//check if using

// userSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) {
//     next()
//   }

//   const salt = await bcrypt.genSalt(10)
//   this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model('User', userSchema)

export default User
