const mongoose = require('mongoose')

var schema=mongoose.Schema({
    ProductName:String,
    Description:String,
    Price:String,
    Image:String
})
var productModel=mongoose.model("product",schema)
module.exports=productModel