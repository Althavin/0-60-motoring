const express = require('express')
const { register, login, logout, showUser, changePassword, getUser, updateUser } = require('../controller/authController')
const { authenticateUser } = require('../middleware/authentication')



const router = express.Router()


router.post("/register",register)
router.post('/login', login)
router.get("/logout",authenticateUser,logout)
router.get("/me",authenticateUser,showUser)
router.get("/user",authenticateUser,getUser)
router.patch("/update",authenticateUser,updateUser)
router.patch("/change-password",authenticateUser,changePassword)



module.exports = router