const router = require("express").Router()

const { ensureLogin } = require("../utils/auth")

const {
    getLogin,
    getRegister,
    getIndex,
} = require("../controllers/index")

router.get("/",getIndex)
router.get("/login",ensureLogin,getLogin)
router.get("/register",ensureLogin,getRegister)

module.exports = router