
const {StatusCode, StatusCodes } = require("http-status-codes");
const Blog = require("../models/Blog");
const NotFoundError = require("../errors/not-found");
const { response } = require("express");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})



const createBlog = async(req,res)=>{

    
    const { body,title,images,author,description} = req.body

    const responseImages = images.map((image,index)=>{
        return cloudinary.uploader.upload(image,{
            folder:"blogs-image",
            // public_id: `${title}-image-${index}`,
        })
    })

    const imageResults = await Promise.all(responseImages)

    const imageUrls = imageResults.map(image=>image.secure_url)

    // console.log(imageUrls)


    const newBlog = await Blog.create({
        title,
        body,
        author,
        images: imageUrls,
      
        description,
        
    })


    res.status(StatusCodes.CREATED).json({
        message:"Success",
        responseEntity: newBlog
    })
}




const getVisibleBlogs = async(req,res)=>{
    const blogs = await Blog.find({visible:true})
    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: blogs
    })

}


const getAllBlogs = async(req,res)=>{
    const { visible, page, limit,search} = req.query

   
    const where = {}

    if(visible){
        where.visible = visible
    }

    if(search){
        where.title = new RegExp(search, "i")
    }

    const result = Blog.find(where)

    // if(page && limit){
    //     result.skip((page-1)*limit).limit(limit)
    // }



    const blogs = await result


    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: blogs
    })
}



const getBlogById = async(req,res)=>{
    const { id } = req.params

    const blog = await Blog.findById(id)

    if(!blog){
        throw new NotFoundError(`Blog with id ${id} not found`)
    }

    res.status(StatusCodes.OK).json({
        message: "Success",
        responseEntity: blog
    })

}


const updateBlog = async(req,res)=>{

    const { id} = req.params

    const blogExists = await Blog.findById(id)

    if(!blogExists){
        throw new NotFoundError(`Blog with id ${id} not found`)
    }


    const { body,title,author,description} = req.body

  

    blogExists.title = title
    blogExists.body = body
    blogExists.author = author
    blogExists.description = description

    await blogExists.save()

    res.status(StatusCodes.CREATED).json({
        message:"Success",
        responseEntity: blogExists
    })
}


const hideBlog = async(req,res)=>{
    const { id } = req.params

    const blogExists = await Blog.findById(id)  

    if(!blogExists){
        throw new NotFoundError(`Blog with id ${id} not found`)
    }

    blogExists.visible = !blogExists.visible

    await blogExists.save()

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: blogExists
    })


}



const showBlog = async(req,res)=>{
    const { id } = req.params

    const blogExists = await Blog.findById(id)  

    if(!blogExists){
        throw new NotFoundError(`Blog with id ${id} not found`)
    }

    blogExists.visible = !blogExists.visible

    await blogExists.save()

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: blogExists
    })


}


const deleteBlog = async(req,res)=>{
    const { id } = req.params

    const blogExists = await Blog.findById(id)  

    if(!blogExists){
        throw new NotFoundError(`Blog with id ${id} not found`)
    }

    await Blog.deleteOne({ _id: id })

    res.status(StatusCodes.CREATED).json({
        message:"Success",
        responseEntity: blogExists
    })

}

const updateImage = async(req,res)=>{
    const { id } = req.params

    const blogExists = await Blog.findById(id)

    if(!blogExists){
        throw new NotFoundError(`Blog with id ${id} not found`)
    }

    const { image,existingImage } = req.body



    const findIndex = blogExists.images.findIndex((img)=>img === existingImage)

    const responseImage = await cloudinary.uploader.upload(image,{
        folder:"blogs-image",
        // public_id: `${blogExists.title}-image-0`,
    })

    
    blogExists.images[findIndex] = responseImage.secure_url

    await blogExists.save()

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: blogExists
    })

}


    


module.exports = {
    createBlog,
    getVisibleBlogs,
    getAllBlogs,
    getBlogById,
    updateBlog,
    hideBlog,
    showBlog,
    deleteBlog,
    updateImage
}