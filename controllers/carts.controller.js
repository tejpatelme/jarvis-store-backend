const { Cart } = require("../models/cart.model");

exports.getUsersCart = async (req, res) => {
  const { userId } = req;

  const cart = await Cart.findOne({ userId }).populate({
    path: "products",
    populate: {
      path: "productId",
    },
  });

  res.status(200).json({ success: true, cart });
};

exports.putUsersCartInRequest = async (req, res, next, cartId) => {
  const cart = await Cart.findById(cartId);
  req.cart = cart;
  next();
};

exports.addProductToCart = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  cart.products.push({
    productId: productId,
    qty: 1,
  });

  await cart.save();

  res.json({ success: true });
};

exports.increaseProductQuantity = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  const match = cart.products.findIndex(
    (product) => String(product.productId) === productId
  );

  cart.products[match].qty += 1;

  const updatedCart = await cart.save();

  res.status(200).json({ success: true });
};

exports.decreaseProductQuantity = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  const match = cart.products.findIndex(
    (product) => String(product.productId) === productId
  );

  cart.products[match].qty -= 1;

  const updatedCart = await cart.save();

  res.status(200).json({ success: true });
};

exports.removeProductFromCart = async (req, res) => {
  const { cart } = req;
  const { productId } = req.body;

  const match = cart.products.findIndex(
    (product) => String(product.productId) === productId
  );

  cart.products.splice(match, 1);

  const updatedCart = await cart.save();

  res.status(200).json({ success: true });
};
