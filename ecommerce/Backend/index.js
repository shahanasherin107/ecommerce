//importing
const express=require("express")
require("./connection")
var userModel=require("./model/user")
var cors = require('cors')


//initialise
const app = express()


app.use(express.json());
app.use(cors())

//api crteation
app.get('/', (req, res) => {
  res.send('Hello World')
})
app.get('/trial', (req, res) => {
  res.send('this is a trial message')
})
 
//add api
app.post("/add",async(req,res)=>{
    await userModel(req.body).save()
    res.send("data added")
    
})
//view api
app.get("/view",async(req,res)=>{
    var data= await userModel.find()
    res.send(data)
})
//deletion api
app.delete("/remove/:id",async(req,res)=>{
     await userModel.findByIdAndDelete(req.params.id)
    res.send("data deleted")
})
//update api
app.put("/update/:id",async(req,res)=>{
     await userModel.findByIdAndUpdate(req.params.id,req.body)
    res.send("data updated")
})

//port setting
app.listen(3004,()=>{
    console.log("port is running")
})
  