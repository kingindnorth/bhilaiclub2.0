const router = require("express").Router()
const passport = require("passport")

const { ensureAuthenticated, ensureLogin} = require("../utils/auth")
const {
    postLogin,
    postRegister,
    logout
} = require("../controllers/auth")

//submit form
router.post("/login",postLogin)
router.post("/register",postRegister)

//google login
router.get("/google",ensureLogin,passport.authenticate('google', { scope: ['profile'] }))
router.get("/google/callback",ensureLogin,passport.authenticate('google', { failureRedirect: '/login' }),
    (req,res)=>{
        res.redirect("/")
})

//logout
router.get("/logout",logout)

module.exports = router