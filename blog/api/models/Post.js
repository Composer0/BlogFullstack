const mongoose = require('mongoose'); 

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            // required:["life", "music", "food", "code"]
            required: false
        }
    },    
    {timestamps: true} //creates updated and added times.
);

module.exports = mongoose.model("Post", PostSchema);