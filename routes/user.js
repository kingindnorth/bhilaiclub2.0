const router = require("express").Router()

router.get("/",(req,res)=>{
    res.render("layout")
})

module.exports = router