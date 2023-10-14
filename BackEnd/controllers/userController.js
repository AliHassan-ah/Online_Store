const  { userModel } = require("../models/user/user") ;
var bcrypt = require("bcryptjs");
const config = require("config")
var _ = require("lodash")
const jwt = require("jsonwebtoken");
//Sign Up
const signup = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send("User Already Exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    let newUser = new userModel({
      name: userName,
      password: hashedPassword,
      email: email,
    });
    // const token = jwt.sign(
    //   { email: newUser.email, id: newUser._id },
    //   config.get("jwtPrivateKey")
    // );
    await newUser.save();
    // return res.status(201).send({ token: token, newUser});
    return res.status(201).send( _.pick(newUser,['name','email']));
} catch (error) {
    console.log("Error",error);
    res.status(500).send("Something went wrong")
  }
};
//Sign
const signin = async (req, res) => {
    const {email,password} =  req.body
    try{
      const existingUser = await userModel.findOne({ email: email });
      if (!existingUser) {
        return res.status(404).send("User Not Found");
      }
      const matchPassword =  await bcrypt.compare(password,existingUser.password)
      if(!matchPassword){
        return res.status(400).send("Invalid Credentials")
      }
      const token = jwt.sign(
        { email: existingUser.email, id: existingUser._id },
        config.get("jwtPrivateKey")
      );
      // req.session.user = existingUser
      return res.status(201).send({user:existingUser,token})
    }
    catch(error){
      console.log(error)
      res.status(500).send("Error","Something went wrong")
    }
};
const logout = async (req,res)=>{
  req.session.user = null
}

module.exports = { signup, signin,logout };
