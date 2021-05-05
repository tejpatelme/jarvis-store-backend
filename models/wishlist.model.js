const { Schema, model } = require("mongoose");

const WishlistSchema = new Schema({
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Wishlist = model("Wishlist", WishlistSchema);

module.exports = { Wishlist };
