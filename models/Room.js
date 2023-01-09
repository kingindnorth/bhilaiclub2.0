const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    bookedDates:[Date],
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Room",RoomSchema)