const bcrypt = require("bcryptjs")
const User = require("../models/User")

const postLogin = (req,res) => {

}

const postRegister = async(req,res) => {
    console.log("ami working");
    const errors = []
    try{
        const {
            name,
            email,
            password,
            password2
        } = req.body

        if(!name || !email || !password || !password2){
            errors.push({msg:"please enter all fields"})
            return res.status(400).render("register",{
                errors,
                name,
                email
            })
        }

        const user = await User.findOne({email})
        if(user){
            errors.push({msg:"user already exists"})
            return res.status(400).render("register",{
                errors,
                name
            })
        }

        if(password!==password2){
            errors.push({msg:"password does not match"})
            return res.status(400).render("register",{
                errors,
                name,
                email
            })
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({
            name,
            email,
            password:hashPassword
        })

        await newUser.save()
        // req.flash('success_msg','you are now registered')
        res.redirect("/login")

    }catch(err){
        console.log(err)
        res.render("error/500")
    }
}

const logout = (req,res,next) => {
        req.logout(err=>{
            if(err) return next(err)
            res.redirect("/")
        })
}

module.exports = {
    postLogin,
    postRegister,
    logout,
}