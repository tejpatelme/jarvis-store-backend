const express = require("express");
const { User } = require("../models/user.model");

const router = express.Router();

router.route("/signup").post(async (req, res) => {
  const { email, password, cartId, wishlistId } = req.body;

  try {
    const user = await User.create({ email, password, cartId, wishlistId });
    res.json(user);
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
});

router.route("/login").post(async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      return user.password === password
        ? res.status(200).json({ user })
        : res.status(401).json({
            success: false,
            errorMessage: "Email and password don't match",
          });
    } else {
      res.status(401).json({
        success: false,
        errorMessage: "Can't find an account with the email",
      });
    }
  } catch (err) {
    res.status(401).json({ success: false, errorMessage: err.message });
  }
});

module.exports = router;
