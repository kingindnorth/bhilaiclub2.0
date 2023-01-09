const router = require("express").Router()

const {
    getRoom,
    bookRoom,
    getBooking
} = require("../controllers/booking")

router.get("/",getBooking)
router.get("/:id",getRoom)
router.post("/:id",bookRoom)

module.exports = router