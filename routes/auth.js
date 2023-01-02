const router = require("express").Router()
const passport = require("passport")

const {
    getLogin,
    getRegister,
    postLogin,
    postRegister,
    logout
} = require("../controllers/auth")

//get form
router.get("/login",getLogin)
router.get("/register",getRegister)

//submit form
router.post("/login",postLogin)
router.post("/register",postRegister)

//google login
router.get("/google",passport.authenticate('google', { scope: ['profile'] }))
router.get("/google/callback",passport.authenticate('google', { failureRedirect: '/' }),
    (req,res)=>{
        res.redirect("/")
})

//logout
router.get("/logout",logout)

module.exports = router