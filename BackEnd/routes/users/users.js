var express = require('express');
var {User} = require('../../models/user/user')
const {signup,signin} = require('../../controllers/userController')
var router = express.Router();
var _ = require("lodash")
const bcrypt = require("bcryptjs")
const config = require("config")
const jwt = require("jsonwebtoken")

/* Register User */
// router.post('/register', async(req, res, next)=> {
//   let existingUser =  await User.findOne({email : req.body.email});
//   if(existingUser) return res.status(400).send("User With Email Already Exists")
//   let user = new User({
//     name : req.body.name,
//     email : req.body.email,
//     password : req.body.password,
//   })

//   await user.generateHashedPassword();
//   await user.save();
//   return res.json(_.pick(user,["name","email"]))
// })  
router.post('/register',signup)

/* Login User */
// router.post('/login',async(req,res,next)=>{
//   let user = await User.findOne({email:req.body.email})
//   if(!user)
//   return res.status(400).send("User Not Register")
//   let isValid = await bcrypt.compare(req.body.password, user.password)
//   if(!isValid)
//   return res.status(401).send("Invalid Password")
//   let token = jwt.sign({_id:user._id,name:user.name},config.get("jwtPrivateKey"))
//   res.send({accessToken : token ,user})
// })
router.post('/login',signin)

module.exports = router;
