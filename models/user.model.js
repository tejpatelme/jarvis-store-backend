const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  email: String,
  password: String,
  cartId: Schema.Types.ObjectId,
  wishlistId: Schema.Types.ObjectId,
});

const User = model("User", UserSchema);

module.exports = { User };
