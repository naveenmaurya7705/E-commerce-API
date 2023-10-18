const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  
  quantity: {
    type: String,
    default: 0,
  },
});

const product = new mongoose.model("product", productSchema);
module.exports = product;
