const express = require("express");
const {
  getUsersCart,
  putUsersCartInRequest,
  addProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} = require("../controllers/carts.controller");
const { asyncHandler, verifyToken } = require("../middlewares");

const router = express.Router();

router.use(asyncHandler(verifyToken), asyncHandler(putUsersCartInRequest));

router.route("/").get(asyncHandler(verifyToken), asyncHandler(getUsersCart));

router
  .route("/add-to-cart")
  .post(asyncHandler(verifyToken), asyncHandler(addProductToCart));

router
  .route("/increase-product-quantity")
  .post(asyncHandler(verifyToken), asyncHandler(increaseProductQuantity));

router
  .route("/decrease-product-quantity")
  .post(asyncHandler(verifyToken), asyncHandler(decreaseProductQuantity));

router
  .route("/remove-product")
  .post(asyncHandler(verifyToken), asyncHandler(removeProductFromCart));

module.exports = router;
