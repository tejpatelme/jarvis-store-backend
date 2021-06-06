const { Product } = require("../models/product.model");
const fakeProducts = require("../data/products");

exports.seedDatabase = async (req, res) => {
  const products = await Product.create(fakeProducts);

  res.json({ success: true, products });
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({});

  res.json({ success: true, products });
};

exports.getSingleProduct = async (req, res) => {
  const { productId } = req.params;

  const product = await Product.findById(productId);

  res.json({ success: true, product });
};
