const { Schema, model } = require("mongoose");

const CartSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    { productId: { type: Schema.Types.ObjectId, ref: "Product" }, qty: Number },
  ],
});

const Cart = model("Cart", CartSchema);

module.exports = { Cart };
