const mongoose = require('mongoose')

var schema=mongoose.Schema({
    ProductName:String,
    Description:String,
    Price:Number,
    Image:String
})
var cartModel=mongoose.model("cart",schema)
module.exports=cartModel