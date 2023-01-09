const router = require("express").Router()

const {
    getBooking
} = require("../controllers/booking")

router.get("/",getBooking)

module.exports = router