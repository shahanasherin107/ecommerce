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


app.get('/user/:email', async (req, res) => {
  try {
    const user = await userModel.findOne({ Email: req.params.email });
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});






//add prdct
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

//view prdct
app.get("/view",async(req,res)=>{
try {
    var data=await productModel.find()
    console.log("Fetched products:", data);
    res.send(data)
} catch (error) {
    console.log(error)
}
})

//Delete prdct
app.delete("/delete/:id",async(req,res)=>{
try {
    await productModel.findByIdAndDelete(req.params.id)
    res.send({message:"data deleted"})
} catch (error) {
    console.log(error)
}
})

//update prdct
app.put("/update/:id",async(req,res)=>{
try {
    await productModel.findByIdAndUpdate(req.params.id,req.body)
    res.send({message:"data updated"})
} catch (error) {
    console.log(error)
}
})

//add to cart
const cartModel = require("./model/cart");

app.post("/addcart", async (req, res) => {
  try {
    await cartModel.create(req.body);
    res.send({ message: "product added to cart!!" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding product to cart" });
  }
});

//get cart

app.get("/cart", async (req, res) => {
  try {
    const cartItems = await cartModel.find();
    res.send(cartItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching cart items" });
  }
});


//  delete from cart
app.delete("/cart/:id", async (req, res) => {
  try {
    await cartModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Product removed from cart" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error removing product" });
  }
});

const orderModel = require("./model/order");

// place order (after payment success)
app.post("/order", async (req, res) => {
  try {
    const newOrder = await orderModel.create(req.body);
    res.send({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error placing order" });
  }
});

// get all orders with user details
app.get("/order", async (req, res) => {
  try {
    const orders = await orderModel.find().populate("userId", "Name Email");
    res.send(orders);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching orders" });
  }
});

const wishlistModel = require("./model/wishlist");

//  Add to wishlist
app.post("/addwishlist", async (req, res) => {
  try {
    await wishlistModel.create(req.body);
    res.send({ message: "Product added to wishlist!" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error adding product to wishlist" });
  }
});

//  Get wishlist (all)
app.get("/wishlist", async (req, res) => {
  try {
    const wishlistItems = await wishlistModel.find().populate("userId", "Name Email");
    res.send(wishlistItems);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching wishlist items" });
  }
});

//  Remove from wishlist
app.delete("/wishlist/:id", async (req, res) => {
  try {
    await wishlistModel.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Product removed from wishlist" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error removing product from wishlist" });
  }
});

//  Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching users" });
  }
});

// Delete user by ID
app.delete("/users/:id", async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting user" });
  }
});



//port setting
app.listen(3004,()=>{
    console.log("port is running")
})
  