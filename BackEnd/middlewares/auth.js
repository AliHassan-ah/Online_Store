const jwt = require("jsonwebtoken");
const config = require("config");
const secrectKey = config.get("jwtPrivateKey");
const  { userModel } = require("../models/user/user") ;
const  auth =  async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      try{
        let user = jwt.verify(token, secrectKey);
        req.userId = user.id;
        //To Place all user info after getting it from DB commented above used below code
        // req.user = await userModel.findById(user._id)
      }
      catch(err){
        return res.status(401).send("Invalid Token")
      }
   
    } else {
      res.status(401).send("Unauthorized User");
    }
    next();
  } catch (error) {
    console.log("Auth Error", error);
    res.status(401).send(error);
  }
};
module.exports = auth