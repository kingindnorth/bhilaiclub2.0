const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    googleId:{
        type:String
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
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