const { Schema, model } = require("mongoose");

// const ProductSchema = new Schema({
//   name: String,
//   brand: String,
//   image: String,
//   price: Number,
//   inStock: Boolean,
//   fastDelivery: Boolean,
//   ratings: Number,
//   color: String,
// });

const ProductSchema = new Schema({
  name: {
    type: String,
    required: "Name of the product is required",
  },
  description: {
    type: String,
  },
  category: {
    type: String,
    required: "Category of the product is required",
  },
  software: {
    type: String,
    required: "Software name is required",
  },
  imageURL: {
    type: String,
    required: "Image URL is required",
  },
  price: {
    type: Number,
    required: "Price of the product is required",
  },
  by: {
    type: String,
  },
});

const Product = model("Product", ProductSchema);

module.exports = { Product };
