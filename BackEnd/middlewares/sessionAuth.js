function sessionAuth (req,res,next){
    console.log('here');
    // console.log("Session ", req.sessions.user)
    res.locals.user = req.sessions.user;
    next();
}
module.exports = sessionAuth;