const router = require("express").Router()

const {
    getIndex,
} = require("../controllers/index")

router.get("/",getIndex)

module.exports = router