const Room = require("../models/Room")

const checkAvailability = async(req,res) => {
    try{
        const {
            ROB,
            checkIN,
            checkOUT
        } = req.body

        const rooms = await Room.find()
        console.log(rooms);

        res.render("rooms",{
            isAuthenticated:req.isAuthenticated(),
            rooms
        })

    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = checkAvailability