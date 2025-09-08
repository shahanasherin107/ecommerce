const mongoose = require('mongoose')

var schema=mongoose.Schema({
    Name:String,
    Phone:String,
    Email:String,
    Password:String,
    userType: { type: String, enum: ["admin", "user"],default: "user" },
   
})
var userModel=mongoose.model("ecommerce",schema)
module.exports=userModel