const checkLogin=function (req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    req.flash('error', 'You Must be Logged In');
    res.redirect('/login');
}

module.exports=checkLogin;