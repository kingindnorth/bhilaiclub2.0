const checkAvailability = async(req,res) => {
    try{
        const {
            ROB,
            checkIN,
            checkOUT
        } = req.body
        pass 
        
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = checkAvailability