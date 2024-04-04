
const {StatusCodes} = require("http-status-codes")
const YoutubeLink = require("../models/YoutubeLink")
const { NotFoundError } = require("../errors")



const createLink = async(req,res)=>{

    const { link,title,description} = req.body

    const newVideoLink = await YoutubeLink.create({link,title,description})


    res.status(StatusCodes.CREATED).json({
        message:"Success",
        responseEntity: newVideoLink
    })
}



const getVisibleLinks = async(req,res)=>{
    const links = await YoutubeLink.find({visible:true})
    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: links
    })

}

const getAllLinks = async(req,res)=>{
    const { visible, page, limit,search} = req.query

   
    const where = {}

    if(visible){
        where.visible = visible
    }

    if(search){
        where.title = new RegExp(search, "i")
    }
    const result = YoutubeLink.find(where)

    // if(page && limit){
    //     result.skip((page-1)*limit).limit(limit)
    // }

    const links = await result  

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: links
    })

}


const getLinkById = async(req,res)=>{
    const {id} = req.params

    const link = await YoutubeLink.findById(id)

    if(!link){
       throw new NotFoundError(`Link with id ${id} not found`)
    }

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: link
    })

}


const hideLink = async(req,res)=>{
    const {id} = req.params

    const link = await YoutubeLink.findById(id)

    if(!link){
        throw new NotFoundError(`Link with id ${id} not found`)
    }

    link.visible = !link.visible

    await link.save()

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: link
    })

}

const updateLink = async(req,res)=>{
    const {id} = req.params

    const link = await
    YoutubeLink.findByIdAndUpdate(id
        ,req.body,{new:true})

    if(!link){
        throw new NotFoundError(`Link with id ${id} not found`)
    }

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: link
    })

}

const showLink  = async(req,res)=>{
    const {id} = req.params

    const link = await YoutubeLink.findById(id)

    if(!link){
        throw new NotFoundError(`Link with id ${id} not found`)
    }

    link.visible = !link.visible

    await link.save()

    res.status(StatusCodes.OK).json({
        message:"Success",
        responseEntity: link
    })

}

const deleteLink = async(req,res)=>{
    const {id} = req.params

    const link = await YoutubeLink.findByIdAndDelete(id)

    if(!link){
        throw new NotFoundError(`Link with id ${id} not found`)
    }

    res.status(StatusCodes.CREATED).json({
        message:"Success",
        responseEntity: null
    })

}



module.exports = {
    createLink,
    getVisibleLinks,
    getAllLinks,
    getLinkById,
    hideLink,
    updateLink,
    showLink,
    deleteLink
}

