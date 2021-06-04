const express = require("express");
const {
  signUpUser,
  logInUser,
  checkIfUserExists,
} = require("../controllers/users.controller");
const {
  validateEmail,
  validatePassword,
  verifyToken,
} = require("../middlewares");

const router = express.Router();

router
  .route("/signup")
  .post(validateEmail, validatePassword, checkIfUserExists, signUpUser);

router.route("/login").post(logInUser);

module.exports = router;
