var express = require('express');
var {User} = require('../../models/user/user')
var router = express.Router();
var _ = require("lodash")

/* GET users listing. */
router.post('/register', async(req, res, next)=> {
  let user =  await User.findOne({email : req.body.email});
  if(user) return res.status(400).send("User With Email Already Exists")
  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.generateHashedPassword();
  await user.save();
  return res.json(_.pick(user,["name","email"]))
})  

module.exports = router;
