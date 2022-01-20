import Post from './models/postModel.js'
import connectDB from './config/db.js'

import fs from 'fs'

let rawdata = fs.readFileSync('server/data/POST.json')
let posts = JSON.parse(rawdata)
console.log(posts)

connectDB()

const importData = async () => {
  try {
    await Post.deleteMany()

    await Post.insertMany(posts)

    console.log('Data Imported!')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

importData()
