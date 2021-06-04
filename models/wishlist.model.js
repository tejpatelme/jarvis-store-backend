const { Schema, model } = require("mongoose");

const WishlistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Wishlist = model("Wishlist", WishlistSchema);

module.exports = { Wishlist };
