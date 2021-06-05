const express = require("express");
const {
  getUsersCart,
  putUsersCartInRequest,
  addProductToCart,
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductFromCart,
} = require("../controllers/carts.controller");
const {
  asyncHandler,
  paramAsyncHandler,
  verifyToken,
} = require("../middlewares");

const router = express.Router();

router.param("cartId", paramAsyncHandler(putUsersCartInRequest));

router.route("/").get(asyncHandler(verifyToken), asyncHandler(getUsersCart));

router
  .route("/add-to-cart/:cartId")
  .post(asyncHandler(verifyToken), asyncHandler(addProductToCart));

router
  .route("/increase-product-quantity/:cartId")
  .post(asyncHandler(verifyToken), asyncHandler(increaseProductQuantity));

router
  .route("/decrease-product-quantity/:cartId")
  .post(asyncHandler(verifyToken), asyncHandler(decreaseProductQuantity));

router
  .route("/remove-product/:cartId")
  .post(asyncHandler(verifyToken), asyncHandler(removeProductFromCart));

module.exports = router;
