const router = require("express").Router()

const { ensureLogin, ensureAuthenticated} = require("../utils/auth")

const {
    getLogin,
    getRegister,
    getIndex,
} = require("../controllers/index")

const {
    getRoom
} = require("../controllers/booking")

router.get("/",getIndex)
router.get("/login",ensureLogin,getLogin)
router.get("/register",ensureLogin,getRegister)
router.get("/:id",ensureAuthenticated,getRoom)

module.exports = router