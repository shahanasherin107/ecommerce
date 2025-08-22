const mongoose = require('mongoose')

var schema=mongoose.Schema({
    Name:String,
    Phone:Number,
    Email:String,
    Password:String,
   
    
})
var userModel=mongoose.model("ecommerce",schema)
module.exports=userModel