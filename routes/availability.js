const router = require("express").Router()

const checkAvailability = require("../controllers/availability")

//check availability
router.post("/",checkAvailability)

module.exports = router