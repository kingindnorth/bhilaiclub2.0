const Room = require("../models/Room")

const getLogin = (req,res) => {
    try{
        res.render("login")
    }catch(err){
        console.log(err)
        res.render("error/500")
    }
}

const getRegister = (req,res) => {
    try{
        res.render("register")
    }catch(err){
        console.log(err)
        res.render("error/500")
    }
}

const getIndex = async(req,res) => {
    try{
        const rooms = await Room.find()
        res.render("index",{
            isAuthenticated:req.isAuthenticated(),
            rooms
        })
    }catch(err){
        console.log(err)
        res.render("error/500")
    }

}

module.exports = {
    getLogin,
    getRegister,
    getIndex
}