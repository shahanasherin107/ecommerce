const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "ecommerce" }, // reference to user
  products: [
    {
      ProductName: String,
      Price: Number,
      Quantity: { type: Number, default: 1 },
      Image: String,
    }
  ],
  totalAmount: Number,
  createdAt: { type: Date, default: Date.now }
});

const orderModel = mongoose.model("order", orderSchema);
module.exports = orderModel;

