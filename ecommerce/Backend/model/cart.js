const mongoose = require('mongoose')

var schema=mongoose.Schema({
    ProductName:String,
    Description:String,
    Price:Number,
    Image:String
})
var userModel=mongoose.model("cart",schema)
module.exports=cartspace