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
    description:{
        type:String,
        required:true
    },
    author:{
        type: String,
        required: false
    },
    images:{
        type: [String],
        required: true
    },
   
    visible:{
        type: Boolean,
        default: true
    
    
    }
},{timestamps: true})


const Blog = mongoose.model('blog', BlogSchema)


module.exports = Blog