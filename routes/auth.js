const router = require("express").Router()
const passport = require("passport")

const {
    postLogin,
    postRegister,
    logout
} = require("../controllers/auth")

//submit form
router.post("/login",postLogin)
router.post("/register",postRegister)

//google login
router.get("/google",passport.authenticate('google', { scope: ['profile'] }))
router.get("/google/callback",passport.authenticate('google', { failureRedirect: '/' }),
    (req,res)=>{
        res.redirect("/users")
})

//logout
router.get("/logout",logout)

module.exports = router