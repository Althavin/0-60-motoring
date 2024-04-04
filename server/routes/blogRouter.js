const express = require("express")
const { authenticateUser } = require("../middleware/authentication")
const { createBlog, getVisibleBlogs, getAllBlogs, getBlogById, showBlog, hideBlog, updateBlog, deleteBlog, updateImage } = require("../controller/blogController")


const router = express.Router()

router.post("/",authenticateUser,createBlog)
router.get("/",getVisibleBlogs)
router.get("/all",authenticateUser,getAllBlogs)
router.get("/:id",getBlogById)
router.patch("/show/:id",authenticateUser,showBlog)
router.patch("/hide/:id",authenticateUser,hideBlog)
router.patch("/:id",authenticateUser,updateBlog)
router.patch("/image/:id",authenticateUser,updateImage)
router.delete("/:id",authenticateUser,deleteBlog)


module.exports = router