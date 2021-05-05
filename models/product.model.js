const { Schema, model } = require("mongoose");

const ProductSchema = new Schema({
  name: String,
  brand: String,
  image: String,
  price: Number,
  inStock: Boolean,
  fastDelivery: Boolean,
  ratings: Number,
  color: String,
});

const Product = model("Product", ProductSchema);

module.exports = { Product };
