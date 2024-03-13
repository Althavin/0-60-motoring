const express = require("express");
// const fs = require('fs');
// const path = require('path');
const { Blog, YoutubeLink } = require("./models");
const router = express.Router();

router.get("/blogs", async (req, res) => {
  try {
    let queryObj = {};

    if (req.query.search) {
      queryObj.title = { $regex: req.query.search, $options: "i" };
    }   

    let blogs = await Blog.find(queryObj);
    res.status(200).json({
      message: "success",
      responseEntity: blogs,
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: "failure",
      responseEntity: error,
    });
  }
});

router.get("/blogs/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        message: "failure",
        responseEntity: "blog not found",
      });
    }

    res.status(200).json({
      message: "success",
      responseEntity: blog,
    });
  } catch (error) {
    res.status(500).json({
      message: "failure",
      responseEntity: error,
    });
  }
});

// router.post("/blogs", async(req, res) => {

//     try {
//         const htmlContent = fs.readFileSync(path.join(__dirname, 'bmw.peugot.html'), 'utf8');

//         // Create a new blog post with the HTML content
//         const blog = await Blog.create({
//             title: req.body.title,
//             body: htmlContent,
//             author: req.body.author,
//             images: req.body.images
//         });
//         res.status(201).json({
//             message: "success",
//             responseEntity: blog
//         })
//     }catch(error){
//         res.status(500).json({
//             message: "failure",
//             responseEntity: error
//         })
//     }

// });

router.post("/youtube", async (req, res) => {
  try {
    const newVideoLink = await YoutubeLink.create(req.body);

    res.status(201).json({
      message: "Success",
      responseEntity: newVideoLink,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      responseEntity: error,
    });
  }
});

router.get("/youtube", async (req, res) => {
  try {
    let queryObj = {};

    if (req.query.search) {
      queryObj.title = new RegExp(req.query.search, "i");
    }   

    let videos = await YoutubeLink.find(queryObj);

    res.status(200).json({
      message: "success",
      responseEntity: videos,
    });
  } catch (error) {
    res.status(500).json({
      message: "failure",
      responseEntity: error,
    });
  }
});
router.get("/youtube/latest", async (req, res) => {
  try {
    const videos = await YoutubeLink.find().sort({ createdAt: -1 }).limit(5);

    res.status(200).json({
      message: "Success",
      responseEntity: videos,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal Server Error",
      responseEntity: error,
    });
  }
});

module.exports = router;
