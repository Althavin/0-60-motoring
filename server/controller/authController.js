const { BadRequestError, ForbiddenError } = require("../errors");
const User = require("../models/User");
const { createTokenUser, attachCookiesToResponse } = require("../utils");
const { StatusCodes } = require("http-status-codes");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})


const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError("Please Provide All Values");
  }

  const EmailExists = await User.findOne({ email });

  if (EmailExists) {
    throw new BadRequestError("Email Provided Already Exists");
  }

  const user = await User.create(req.body);

  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.ACCEPTED).json({ responseEntity: tokenUser, message:"Success" });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please Provide All Values");
  }

  const user = await User.findOne({ email });

  if (!user) {
    throw new BadRequestError(`No account associated with ${email}`);
  }

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new ForbiddenError("Invalid Credentials");
  }
 
  console.log(user.email)


  const tokenUser = createTokenUser(user);

  attachCookiesToResponse({ res, user: tokenUser });

  res.status(StatusCodes.ACCEPTED).json({ responseEntity: tokenUser, message:"Success" });
};

const logout = async (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
    secure: true, // Set secure to true for cross-origin requests over HTTPS
    signed: true,
    sameSite: "None", //expires immediately
  });
  res.status(StatusCodes.OK).json({ message:"Success", responseEntity: "user logged out!" });
};

const showUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message:"Success", responseEntity: req.user });
};


const getUser = async (req,res)=>{
  const id = req.user.userId

  const user = await User.findById(id)

  if(!user){
    throw new NotFoundError(`User with id ${id} not found`)
  }

  delete user.password

  res.status(StatusCodes.OK).json({
      message:"Success",
      responseEntity: user
  })
}


const changePassword = async (req,res)=>{
  
  const id = req.user.userId

  const {oldPassword,newPassword} = req.body

  const user = await User.findById(id)

  if(!user){
    throw new NotFoundError(`User with id ${id} not found`)
  }

  const isPasswordCorrect = await user.comparePassword(oldPassword)


  if(!isPasswordCorrect){
    throw new ForbiddenError("Invalid Credentials")
  }

  user.password = newPassword

  await user.save()

  res.status(StatusCodes.OK).json({
    message:"Success",
    responseEntity: user
  })

}


const updateUser = async(req,res)=>{
  const id = req.user.userId

  const user = await User.findById(id)

  if(!user){
    throw new NotFoundError(`User with id ${id} not found`)
  }

  const { name, email, avatar, bio, phone } = req.body

  const responseImage = await cloudinary.uploader.upload(avatar, {
    folder: "blogs-image",
    public_id: `${user.name}-avatar`,
  })


  user.name = name
  user.email = email
  user.avatar = responseImage.secure_url
  user.bio = bio
  user.phone = phone

  await user.save()

  res.status(StatusCodes.OK).json({
    message:"Success",
    responseEntity: user
  })

}
module.exports = { login, showUser, register, logout ,getUser,changePassword,updateUser};
