const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name :String,
    email : String,
    password : String,
    role:{
        type : String,
        default:"user"
    }

})

// userSchema.methods.generateHashedPassword = async function(){
//     let salt =  await bcrypt.genSalt(10)
//     this.password = await bcrypt.hash(this.password,salt)
// }

var userModel = mongoose.model("User",userSchema)
module.exports = {userModel}