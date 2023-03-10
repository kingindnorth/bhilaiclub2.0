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
        res.render("index",{
            isAuthenticated:req.isAuthenticated()
        })
    }catch(err){
        console.log(err)
        res.render("error/500")
    }

}

module.exports = {
    getIndex
}