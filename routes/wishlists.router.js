const express = require("express");
const { verifyToken, asyncHandler } = require("../middlewares");
const {
  getUsersWishlist,
  putUsersWishlistInRequest,
  addOrRemoveProductFromWishlist,
} = require("../controllers/wishlists.controller");

const router = express.Router();

router.use(asyncHandler(verifyToken), asyncHandler(putUsersWishlistInRequest));

router
  .route("/")
  .get(asyncHandler(verifyToken), asyncHandler(getUsersWishlist))
  .post(
    asyncHandler(verifyToken),
    asyncHandler(addOrRemoveProductFromWishlist)
  );

module.exports = router;
