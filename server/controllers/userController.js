import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { Email, password } = req.body

  const user = await User.findOne({ Email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      id: user.User_ID,
      name: user.Name,
      email: user.Email,
    })
  } else {
    res.status(401)
    throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { Name, Age, Birthday, Email, Phone, City, Country, password } =
    req.body

  const userExists = await User.findOne({ Email })

  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    Name,
    Age,
    Birthday,
    Email,
    Phone,
    City,
    Country,
    password,
  })

  if (user) {
    res.status(201).json({
      Name: user.Name,
      Age: user.Age,
      Email: user.Email,
      Phone: user.Phone,
      City: user.City,
      Country: user.Country,
      password: password,
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

export { authUser, registerUser }
