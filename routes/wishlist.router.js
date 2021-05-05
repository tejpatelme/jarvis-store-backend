const express = require("express");
const { Wishlist } = require("../models/wishlist.model");

const router = express.Router();

router.route("/").post(async (req, res) => {
  try {
    const newWishlist = await Wishlist.create({ products: [] });
    res.json(newWishlist);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router
  .route("/:wishlistId")
  .get(async (req, res) => {
    const { wishlistId } = req.params;
    try {
      const wishlist = await Wishlist.findById(wishlistId).populate("products");
      res.json(wishlist);
    } catch (err) {
      res.status(500).json({ success: false, errorMessage: err.message });
    }
  })
  .post(async (req, res) => {
    const { wishlistId } = req.params;
    const { productId } = req.body;
    try {
      const wishlist = await Wishlist.findById(wishlistId);
      wishlist.products.push(productId);
      const updatedWishlist = await wishlist.save();
      await updatedWishlist.populate("products").execPopulate();
      res.json(updatedWishlist);
    } catch (err) {
      res.status(500).json({ success: false, errorMessage: err.message });
    }
  })
  .delete(async (req, res) => {
    const { wishlistId } = req.params;
    const { productId } = req.body;

    try {
      const wishlist = await Wishlist.findById(wishlistId);
      const match = wishlist.products.findIndex(
        (product) => product._id == productId
      );
      wishlist.products.splice(match, 1);
      const updateWishlist = await wishlist.save();
      await updateWishlist.populate("products").execPopulate();
      res.json(updateWishlist);
    } catch (err) {
      res.status(500).json({ success: false, errorMessage: err.message });
    }
  });

module.exports = router;
