import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

// @desc    Auth user
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { Email, password } = req.body

  const email = req.body.email

  //const password = req.body.password

  const user = await User.find({ Email: email, password: password })

  if (user[0]) {
    res.json({
      id: user[0]._id,

      name: user[0].Name,

      email: user[0].Email,
    })
  } else {
    //res.json({'email':email,'password':password,'user':user})

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
