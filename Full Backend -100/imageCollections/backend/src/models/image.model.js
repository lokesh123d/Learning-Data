const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    caption:{
        type:String,
        require:true
    }
});     

const postModel = mongoose.model('Posts',postSchema);

module.exports = postModel;