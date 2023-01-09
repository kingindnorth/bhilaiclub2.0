const Room = require("../models/Room")

const checkAvailability = async(req,res) => {
    try{
        const {
            ROB,
            checkIN,
            checkOUT
        } = req.body

        const date1 = new Date(checkIN)
        const date2 = new Date(checkOUT)
        const dateArray = new Array

        Date.prototype.addDays = function(days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        }

        let currentDate = date1
        while(currentDate <= date2){
            dateArray.push(new Date(currentDate))
            currentDate = currentDate.addDays(1)
        }

        const rooms = await Room.find({isBooked:false})

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