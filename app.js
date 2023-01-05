const express = require("express")
const expLayout = require("express-ejs-layouts")
const passport = require("passport")
const session = require("express-session")
const flash = require("connect-flash")
const ejs = require("ejs")
const connect = require("./utils/db")
require("dotenv").config()
require("./utils/googleStrategy")(passport)
require("./utils/localStrategy")(passport)

const app = express()

//set templating engine
app.use(expLayout)
app.set("view engine","ejs")
app.set("views","views")

//middlewares
//serve static files
app.use(express.static("public"))

//body-parser
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//session
app.use(session({
    secret: process.env.SESSION_KEY,
    resave: true,
    saveUninitialized: true
  }))

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//flash
app.use(flash())

//routes
app.use("/",require("./routes/index"))
app.use("/auth",require("./routes/auth"))
app.use("/users",require("./routes/user"))
app.use("/admin",require("./routes/admin"))

//handling wrong urls
app.use((req,res) => { 
  res.status(404).render('error/404'); 
});

const PORT = process.env.PORT || 1001

app.listen(PORT,()=>{
    connect()
    console.log(`
    server started on port: ${PORT} 
    link: http://localhost:${PORT}/
    `);
})