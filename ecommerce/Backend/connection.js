const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://shahanapm12:shahanasheri@cluster0.yswkjkb.mongodb.net/user?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log('Connected!'))
.catch((err)=>console.log(err))