const express = require("express");
const { verifyToken } = require("../middlewares");
const {
  getUsersWishlist,
  putUsersWishlistInRequest,
  addOrRemoveProductFromWishlist,
} = require("../controllers/wishlists.controller");

const router = express.Router();

router.param("wishlistId", putUsersWishlistInRequest);

router.route("/").get(verifyToken, getUsersWishlist);

router.route("/:wishlistId").post(verifyToken, addOrRemoveProductFromWishlist);

module.exports = router;
