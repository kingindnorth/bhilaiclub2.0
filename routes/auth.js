const router = require("express").Router()
const passport = require("passport")

const { ensureLogin} = require("../utils/auth")

const {
    logout
} = require("../controllers/auth")

//google login
router.get("/google",ensureLogin,passport.authenticate('google', { scope: ['profile'] }))
router.get("/google/callback",ensureLogin,passport.authenticate('google', { failureRedirect: '/login' }),
    (req,res)=>{
        res.redirect("/")
})

//logout
router.get("/logout",logout)

module.exports = router