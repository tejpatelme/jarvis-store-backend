const { Cart } = require("../models/cart.model");

exports.getUsersCart = async (req, res) => {
  const { userId } = req;

  try {
    const cart = await Cart.findOne({ userId }).populate({
      path: "products",
      populate: {
        path: "productId",
      },
    });

    res.status(200).json({ success: true, cart });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.putUsersCartInRequest = async (req, res, next, cartId) => {
  try {
    const cart = await Cart.findById(cartId);
    req.cart = cart;
    next();
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.addProductToCart = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  try {
    cart.products.push({
      productId: productId,
      qty: 1,
    });

    await cart.save();

    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.increaseProductQuantity = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  try {
    const match = cart.products.findIndex(
      (product) => String(product.productId) === productId
    );

    cart.products[match].qty += 1;

    const updatedCart = await cart.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.decreaseProductQuantity = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  try {
    const match = cart.products.findIndex(
      (product) => String(product.productId) === productId
    );

    cart.products[match].qty -= 1;

    const updatedCart = await cart.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

exports.removeProductFromCart = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  try {
    const match = cart.products.findIndex(
      (product) => String(product.productId) === productId
    );

    cart.products.splice(match, 1);

    const updatedCart = await cart.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};
