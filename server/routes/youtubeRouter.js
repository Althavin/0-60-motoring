const express = require("express");
const { authenticateUser } = require("../middleware/authentication");
const { createLink, getVisibleLinks, getAllLinks, getLinkById, showLink, hideLink, updateLink, deleteLink, getVisibleLinksLatest } = require("../controller/youtubeController");


const router = express.Router()



router.post("/create",authenticateUser,createLink)
router.get("/",getVisibleLinks)
router.get("/all",authenticateUser,getAllLinks)
router.get("/latest",getVisibleLinksLatest)
router.get("/:id",getLinkById)
router.patch("/show/:id",authenticateUser,showLink)
router.patch("/hide/:id",authenticateUser,hideLink)
router.patch("/:id",authenticateUser,updateLink)
router.delete("/:id",authenticateUser,deleteLink)


module.exports = router