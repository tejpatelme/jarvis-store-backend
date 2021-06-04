const jwt = require("jsonwebtoken");
const validator = require("validator");

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  const isEmail = validator.isEmail(email);

  if (!isEmail) {
    return res
      .status(401)
      .json({ success: false, errorMessage: "Email is invalid" });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  const isStrongPassword = validator.isStrongPassword(password);

  if (!isStrongPassword) {
    return res
      .status(401)
      .json({ success: false, errorMessage: "Password is not strong enough" });
  }

  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = decodedToken.userId;

    return next();
  } catch (err) {
    res.status(401).json({ success: false, errorMessage: err.message });
  }
};

module.exports = { validateEmail, validatePassword, verifyToken };