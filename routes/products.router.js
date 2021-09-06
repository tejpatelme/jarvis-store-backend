const express = require("express");
const {
  seedDatabase,
  getProducts,
  getSingleProduct,
} = require("../controllers/products.controller");
const { asyncHandler } = require("../middlewares");

const router = express.Router();

// router.route("/seed").post(asyncHandler(seedDatabase));

router.route("/").get(asyncHandler(getProducts));

router.route("/:productId").get(asyncHandler(getSingleProduct));

module.exports = router;
