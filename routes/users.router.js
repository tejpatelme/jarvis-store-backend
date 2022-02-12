const express = require("express");
const {
  signUpUser,
  logInUser,
  checkIfUserExists,
} = require("../controllers/users.controller");
const {
  validateEmail,
  validatePassword,
  asyncHandler,
} = require("../middlewares");

const router = express.Router();

router
  .route("/signup")
  .post(
    validateEmail,
    validatePassword,
    asyncHandler(checkIfUserExists),
    asyncHandler(signUpUser)
  );

router.route("/login").post(asyncHandler(logInUser));

module.exports = router;
