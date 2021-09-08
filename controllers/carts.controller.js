const { Cart } = require("../models/cart.model");
const Razorpay = require("razorpay");

exports.getUsersCart = async (req, res) => {
  const { userId } = req;

  let cart = await Cart.findOne({ userId }).populate({
    path: "products",
    populate: {
      path: "productId",
    },
  });

  res.status(200).json({ success: true, cart });
};

exports.putUsersCartInRequest = async (req, res, next) => {
  const { userId } = req;
  const cart = await Cart.findOne({ userId });

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

  const updatedCart = await cart.save();

  res.json({ success: true, updatedCart });
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

exports.createOrder = async (req, res) => {
  const { orderDetails } = req.body;

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_SECRET,
  });

  const options = {
    amount: orderDetails.amount * 100, // amount in smallest currency unit
    currency: "INR",
    receipt: "receipt_order_74394",
  };

  const order = await instance.orders.create(options);
  res.json({ success: true, order });
};
