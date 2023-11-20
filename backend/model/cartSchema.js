const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
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
    type: Number,
    require: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    require: true,
    default:1
  },
  subtotal: {
    type: Number,
    require: true,
    default:function(){
     return this.price
    }
  },

});

module.exports = mongoose.model("cart", cartSchema);
