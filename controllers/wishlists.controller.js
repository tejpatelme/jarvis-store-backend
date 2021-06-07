const { Wishlist } = require("../models/wishlist.model");

module.exports.getUsersWishlist = async (req, res) => {
  const { userId } = req;

  const wishlist = await Wishlist.findOne({ userId }).populate("products");

  res.status(200).json({ success: true, wishlist });
};

module.exports.putUsersWishlistInRequest = async (req, res, next) => {
  const { userId } = req;

  const wishlist = await Wishlist.findOne({ userId });

  req.wishlist = wishlist;
  next();
};

module.exports.addOrRemoveProductFromWishlist = async (req, res) => {
  const { wishlist } = req;
  const { productId } = req.body;

  const match = wishlist.products.findIndex(
    (product) => String(product) === productId
  );

  match !== -1
    ? wishlist.products.splice(match, 1)
    : wishlist.products.push(productId);

  const updatedWishlist = await wishlist.save();

  res.status(200).json({ success: true });
};
