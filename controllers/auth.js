const passport = require("passport")

const getLogin = (req,res) => {

}

const getRegister = (req,res) => {

}

const postLogin = (req,res) => {

}

const postRegister = (req,res) => {

}

const logout = (req,res,next) => {
        req.logout(err=>{
            if(err) return next(err)
            res.redirect("/")
        })
}

module.exports = {
    getLogin,
    getRegister,
    postLogin,
    postRegister,
    logout,
}