const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desciption:{
        type:String,
        required:true
    },
    isBooked:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Room",RoomSchema)