require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { connectToDatabase } = require("./db/dbConnection");
const {
  productsRouter,
  cartsRouter,
  usersRouter,
  wishlistsRouter,
} = require("./routes/index");

const PORT = process.env.PORT || 3000;

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/cart", cartsRouter);
app.use("/user", usersRouter);
app.use("/wishlist", wishlistsRouter);

app.get("/", (req, res) =>
  res.send("API for Jarvis Store ecommerce application.")
);

app.listen(PORT, () => console.log("Server started on port", PORT));
