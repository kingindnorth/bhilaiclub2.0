const Room = require("../models/Room")

const getRoom = async(req,res) => {
    try{
        const param = req.params.id
        const room = await Room.findById(param)
        res.render("booking",{
            isAuthenticated:req.isAuthenticated(),
            room
        })

    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

const bookRoom = (req,res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = {
    getRoom,
    bookRoom
}