const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    googleId:{
        type:String
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    image:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("User",UserSchema)