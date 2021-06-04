const { User } = require("../models/user.model");
const { Cart } = require("../models/cart.model");
const { Wishlist } = require("../models/wishlist.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

module.exports.checkIfUserExists = async (req, res, next) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return res.status(200).json({
        success: false,
        errorMessage:
          "A user with the specified email already exists. Please login instead",
      });
    }

    next();
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.signUpUser = async (req, res) => {
  const user = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const newUser = await User.create({
      email: user.email.toLowerCase(),
      password: user.password,
    });

    const userCart = await Cart.create({
      userId: newUser._id,
      products: [],
    });

    const userWishlist = await Wishlist.create({
      userId: newUser._id,
      products: [],
    });

    res.status(201).json({ success: true, newUser, userCart, userWishlist });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.logInUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const passwordValid = await bcrypt.compare(password, user.password);

      if (passwordValid) {
        const token = jwt.sign({ userId: user._id }, process.env.TOKEN_SECRET, {
          expiresIn: "24h",
        });

        return res.status(200).json({ success: true, token });
      }
    }

    return res
      .status(401)
      .json({ success: false, errorMessage: "email or password is incorrect" });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};
