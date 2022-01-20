import express from 'express'
import connectDB from './config/db.js'
import postRoutes from './routes/postRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'

connectDB()

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req, res) => {
  res.send('API is running....')
})

app.listen(5000, console.log('Server Running'))
