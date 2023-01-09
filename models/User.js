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
    image:{
        type:String
    },
    myBookings:{
        type:Array,
        roomID:{
            type:String
        },
        date:[Date]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("User",UserSchema)