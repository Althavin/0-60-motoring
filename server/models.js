const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const BlogSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: false
    },
    images:{
        type: [String],
        required: true
    },
    description:{
        type: String,
        required: true
    },
},{timestamps: true})


const Blog = mongoose.model('blog', BlogSchema)



const YoutubeSchema  =new Schema({
    link:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required:false,
    }

},{timestamps: true})

const YoutubeLink = mongoose.model("youtubelinks", YoutubeSchema)

module.exports ={ Blog,YoutubeLink}