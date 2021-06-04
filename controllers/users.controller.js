const { User } = require("../models/user.model");
const { Cart } = require("../models/cart.model");
const { Wishlist } = require("../models/wishlist.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.signUpUser = async (req, res) => {
  const user = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    const newUser = await User.create(user);

    await Cart.create({
      userId: newUser._id,
      products: [],
    });

    await Wishlist.create({
      userId: newUser._id,
      products: [],
    });

    res.status(201).json({ success: true, newUser });
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
