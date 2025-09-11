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

//signup
app.post("/signup", async (req, res) => {
  try {
    await userModel(req.body).save();
    res.send({message:"Sign up completed!!"});
  } catch (error) {
    console.log(error);
  }
});
//login
app.post("/login", async (req, res) => {
  try {
    var user = await userModel.findOne({ Email: req.body.Email });
    if (!user) {
      return res.send({message:"User not found"});
    }
    if (user.Password === req.body.Password) {
       return res.send({
        message: "Logged in successfully",
        userType: user.userType,
        Name: user.Name,       
        Email: user.Email,     
        userId: user._id
       });
        } else {
      return res.send({message:"Invalid "});
    }
  } catch (error) {
    console.log(error);
    return res.send({message:"An error occurred"});
  }
});

//add api
const productModel = require("./model/product");

app.post("/add", async (req, res) => {
  try {
    await productModel.create(req.body);
    res.send({ message: "data added!!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding data" });
  }
});

//view api
app.get("/view",async(req,res)=>{
try {
    var data=await productModel.find()
    console.log("Fetched products:", data);
    res.send(data)
} catch (error) {
    console.log(error)
}
})

//Delete api
app.delete("/delete/:id",async(req,res)=>{
try {
    await productModel.findByIdAndDelete(req.params.id)
    res.send({message:"data deleted"})
} catch (error) {
    console.log(error)
}
})

//update api
app.put("/update/:id",async(req,res)=>{
try {
    await productModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
} catch (error) {
    console.log(error)
}
})

//port setting
app.listen(3004,()=>{
    console.log("port is running")
})
  