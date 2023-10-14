const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = mongoose.Schema({
    name :String,
    email : String,
    password : String,

})

// userSchema.methods.generateHashedPassword = async function(){
//     let salt =  await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password,salt)
// }

var userModel = mongoose.model("User",userSchema)
module.exports = {userModel}