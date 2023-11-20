const mongoose = require("mongoose");
const wishlistSchema = new mongoose.Schema({
    username:{ 
    type: String,
    require: true,
    },
    category: {
    type: String,
    require: true,
  },

  brand: {
    type: String,
    require: true,
  },
  productName: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("wishlist", wishlistSchema);
