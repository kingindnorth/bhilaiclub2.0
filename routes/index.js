const router = require("express").Router()

const {
    getLogin,
    getRegister
} = require("../controllers/index")

router.get("/login",getLogin)
router.get("/register",getRegister)

module.exports = router