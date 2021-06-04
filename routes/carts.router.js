const express = require("express");
const {
  getUsersCart,
  putUsersCartInRequest,
  addProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} = require("../controllers/carts.controller");
const { verifyToken } = require("../middlewares");

const router = express.Router();

router.param("cartId", putUsersCartInRequest);

router.route("/").get(verifyToken, getUsersCart);

router.route("/add-to-cart/:cartId").post(verifyToken, addProductToCart);

router
  .route("/increase-product-quantity/:cartId")
  .post(verifyToken, increaseProductQuantity);

router
  .route("/decrease-product-quantity/:cartId")
  .post(verifyToken, decreaseProductQuantity);

router
  .route("/remove-product/:cartId")
  .post(verifyToken, removeProductFromCart);

module.exports = router;
