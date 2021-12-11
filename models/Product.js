const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  color: String,
  description: String,
  department: String,
  price: Number,
});
const Product = mongoose.Model("Product", productSchema);
module.exports = Product;
