const  { userModel } = require("../models/user/user") ;
var bcrypt = require("bcryptjs");
const config = require("config")
var _ = require("lodash")
const jwt = require("jsonwebtoken");
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
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      config.get("jwtPrivateKey")
    );
    await newUser.save();
    return res.status(201).send({ token: token, newUser});
} catch (error) {
    console.log("Error",error);
    res.status(500).send("Something went wrong")
  }
};
const signin = async (req, res) => {};

module.exports = { signup, signin };
