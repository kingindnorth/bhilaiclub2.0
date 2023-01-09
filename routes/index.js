const router = require("express").Router()

const { ensureAuthenticated} = require("../utils/auth")

const {
    getIndex,
} = require("../controllers/index")

const {
    getRoom
} = require("../controllers/booking")

router.get("/",getIndex)
router.get("/:id",ensureAuthenticated,getRoom)

module.exports = router