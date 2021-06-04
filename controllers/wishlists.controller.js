const { Wishlist } = require("../models/wishlist.model");

module.exports.getUsersWishlist = async (req, res) => {
  const { userId } = req;

  try {
    const wishlist = await Wishlist.findOne({ userId }).populate("products");

    res.status(200).json({ success: true, wishlist });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

module.exports.putUsersWishlistInRequest = async (
  req,
  res,
  next,
  wishlistId
) => {
  try {
    const wishlist = await Wishlist.findById(wishlistId);

    req.wishlist = wishlist;
    next();
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};

module.exports.addOrRemoveProductFromWishlist = async (req, res) => {
  const { wishlist } = req;
  const { productId } = req.body;

  try {
    const match = wishlist.products.findIndex(
      (product) => String(product) === productId
    );

    match !== -1
      ? wishlist.products.splice(match, 1)
      : wishlist.products.push(productId);

    const updatedWishlist = await wishlist.save();

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, errorMessage: err.message });
  }
};
