const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "ecommerce" },
  ProductName: String,
  Description: String,
  Price: Number,
  Image: String,
});

const wishlistModel = mongoose.model("wishlist", wishlistSchema);
module.exports = wishlistModel;
