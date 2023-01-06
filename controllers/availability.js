const Day = require("../models/Day")

const checkAvailability = async(req,res) => {
    try{
        console.log("am i working..../?");
        console.log(req.body)
        res.send("ok")
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = checkAvailability