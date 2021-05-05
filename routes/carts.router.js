const express = require("express");
const mongoose = require("mongoose");
const _ = require("lodash");
const { Cart } = require("../models/cart.model");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const newCart = await Cart.create({ products: [] });
    res.json(newCart);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router
  .route("/:cartId")
  .get(async (req, res) => {
    const { cartId } = req.params;
    try {
      const cart = await Cart.findById(cartId).populate({
        path: "products",
        populate: {
          path: "productId",
        },
      });
      res.json(cart);
    } catch (err) {
      res.json({ success: false, errorMessage: err.message });
    }
  })
  .post(async (req, res) => {
    const { productId } = req.body;
    const { cartId } = req.params;

    try {
      const cart = await Cart.findById(cartId);
      const match = cart.products.findIndex(
        (product) => String(product.productId) === productId
      );

      if (match !== -1) {
        _.extend(cart.products[match], { qty: cart.products[match].qty + 1 });
        const updatedCart = await cart.save();
        await updatedCart
          .populate({
            path: "products",
            populate: { path: "productId" },
          })
          .execPopulate();
        res.json({ updatedCart });
      } else {
        cart.products.push({ productId: productId, qty: 1 });
        const updatedCart = await cart.save();
        await updatedCart
          .populate({
            path: "products",
            populate: { path: "productId" },
          })
          .execPopulate();
        res.json({ updatedCart });
      }
    } catch (err) {
      res.json({ success: false, errorMessage: err.message });
    }
  })
  .delete(async (req, res) => {
    const { cartId } = req.params;
    const { productId } = req.body;
    const cart = await Cart.findById(cartId);
  });

router.route("/increase-product-quantity/:cartId").post(async (req, res) => {
  const { cartId } = req.params;
  const { productId } = req.body;

  try {
    const cart = await Cart.findById(cartId);
    const match = cart.products.findIndex(
      (product) => String(product.productId) === productId
    );
    cart.products[match].qty += 1;
    const updatedCart = await cart.save();
    updatedCart.populate({
      path: "products",
      populate: {
        path: "productId",
      },
    });
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router.route("/decrease-product-quantity/:cartId").post(async (req, res) => {
  const { cartId } = req.params;
  const { productId } = req.body;

  try {
    const cart = await Cart.findById(cartId);
    const match = cart.products.findIndex(
      (product) => String(product.productId) === productId
    );
    cart.products[match].qty -= 1;
    const updatedCart = await cart.save();
    updatedCart
      .populate({
        path: "products",
        populate: {
          path: "productId",
        },
      })
      .execPopulate();
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router.route("/remove-product/:cartId").post(async (req, res) => {
  const { cartId } = req.params;
  const { productId } = req.body;
  try {
    const cart = await Cart.findById(cartId);
    const match = cart.products.findIndex(
      (product) => String(product.productId) === productId
    );
    cart.products.splice(match, 1);
    const updatedCart = await cart.save();
    updatedCart
      .populate({ path: "products", populate: { path: "productId" } })
      .execPopulate();
    res.json(updatedCart);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

module.exports = router;
