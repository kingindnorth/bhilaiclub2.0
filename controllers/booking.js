const getBooking = async(req,res) => {
    try{
        res.render("booking",{
            isAuthenticated:req.isAuthenticated(),
        })
    }catch(err){
        console.log(err)
        res.status(500).render("error/500")
    }
}

module.exports = {
    getBooking
}