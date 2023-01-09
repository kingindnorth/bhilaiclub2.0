const Day = require("../models/Day")

const checkAvailability = async(req,res) => {
    try{
        const {
            ROB,
            checkIN,
            checkOUT
        } = req.body

        console.log(checkIN);
        
        const newDate = new Date(checkIN)

        console.log(newDate);

        const day = await Day.find({date:checkIN})

        res.send("ok")
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = checkAvailability