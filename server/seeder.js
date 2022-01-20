import Post from './models/postModel.js'
import connectDB from './config/db.js'
import User from './models/userModel.js'

import fs from 'fs'

let posts = JSON.parse(fs.readFileSync('server/data/POST.json'))
let users = JSON.parse(fs.readFileSync('server/data/USER.json'))

connectDB()

const importData = async () => {
  try {
    await Post.deleteMany()

    await Post.insertMany(posts)

    await User.deleteMany()

    await User.insertMany(users)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

importData()
