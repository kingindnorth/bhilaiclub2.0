const router = require("express").Router()

const {
    getRoom,
    bookRoom
} = require("../controllers/booking")

router.get("/:id",getRoom)
router.post("/:id",bookRoom)

module.exports = router