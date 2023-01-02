const express = require("express")
const ejs = require("ejs")

require("dotenv").config()

const app = express()

//set templating engine
app.set("view engine","ejs")
app.set("views","views")

//middlewares
//serve static files
app.use(express.static("public"))

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
// app.use("/")
app.use("/auth",require("./routes/auth"))
app.use("/users",require("./routes/user"))
app.use("/admin",require("./routes/admin"))

const PORT = process.env.PORT || 1000

app.listen(PORT,()=>{
    console.log(`
    server started on port: ${PORT} 
    link: http://localhost:${PORT}/
    `);
})