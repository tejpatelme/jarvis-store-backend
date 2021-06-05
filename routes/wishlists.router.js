const express = require("express");
const {
  verifyToken,
  asyncHandler,
  paramAsyncHandler,
} = require("../middlewares");
const {
  getUsersWishlist,
  putUsersWishlistInRequest,
  addOrRemoveProductFromWishlist,
} = require("../controllers/wishlists.controller");

const router = express.Router();

router.param("wishlistId", paramAsyncHandler(putUsersWishlistInRequest));

router
  .route("/")
  .get(asyncHandler(verifyToken), asyncHandler(getUsersWishlist));

router
  .route("/:wishlistId")
  .post(
    asyncHandler(verifyToken),
    asyncHandler(addOrRemoveProductFromWishlist)
  );

module.exports = router;
