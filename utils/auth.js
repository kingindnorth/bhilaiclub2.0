const ensureAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
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