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
    isBooked:{
        type:Boolean,
        default:false
    },
    user:{
        required:false,
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model("Room",RoomSchema)