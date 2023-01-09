const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/auth/google');
  }

const ensureLogin = (req, res, next) => {
    if(!req.isAuthenticated()){
        return next()
    }
    res.redirect("/")
}    

module.exports = {
ensureAuthenticated,
ensureLogin
}