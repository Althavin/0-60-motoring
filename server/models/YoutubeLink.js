const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const YoutubeSchema  = new Schema({
    link:{
        type: String,
        required: true,
    },
    title:{
        type: String,
        required:false,
    },
    description:{
        type: String,
        required: false
    },
    visible:{
        type: Boolean,
        default: true
    
    },


},{timestamps: true})

const YoutubeLink = mongoose.model("youtubelinks", YoutubeSchema)

module.exports =YoutubeLink