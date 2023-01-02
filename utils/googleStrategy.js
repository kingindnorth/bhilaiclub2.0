const GoogleStrategy = require("passport-google-oauth20").Strategy
const User = require("../models/User")

const googleStrategy = (passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK
        },async(accessToken, refreshToken, profile, done)=>{
            const newUser = {
                googleId:profile.id,
                firstName:profile.name.givenName,
                lastName:profile.name.familyName,
                image:profile.photos[0].value
            }
            try{
                let user = await User.findOne({googleId:profile.id})
                if(user){
                    done(null,user)
                }
                else{
                    user = await User.create(newUser)
                    done(null,user)
                }
            }catch(err){
                console.log(err)
            }
            
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
      })
    
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user))
      })
}

module.exports = googleStrategy