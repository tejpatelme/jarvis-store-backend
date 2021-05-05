const express = require("express");
const { Product } = require("../models/product.model");
const fakeProducts = require("../data/products");

const router = express.Router();

router.route("/seed").post(async (req, res) => {
  try {
    const products = await Product.create(fakeProducts);
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: error.message });
  }
});

router.route("/").get(async (req, res) => {
  try {
    const products = await Product.find({});
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router.route("/:productId").get(async (req, res) => {
  const { productId } = req.params;
  try {
    const product = await Product.findById(productId);
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

module.exports = router;
