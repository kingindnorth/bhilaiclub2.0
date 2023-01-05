const mongoose = require("mongoose")

const DaySchema = new mongoose.Schema({
    date:{
        type:Date
    },
    room:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Room"
    }
})

module.exports = mongoose.model("Day",DaySchema)