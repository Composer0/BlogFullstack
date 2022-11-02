const mongoose = require('mongoose'); 

const UserSchema = new mongoose.Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true,
        },
        email: {
            type:String,
            required:true,
            unique:true ,
        },
        password: {
            type:String,
            required:true,
        },
        role: {
            type:String,
            default:"user"
        },
        profilePicture: {
            type:String,
            default: ""
        },
    },
    {timestamps: true} //creates updated and added times.
);
module.exports = mongoose.model("User", UserSchema);