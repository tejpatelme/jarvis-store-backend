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
const { routeNotFound, errorHandler } = require("./middlewares");

const PORT = process.env.PORT || 3000;

connectToDatabase();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/carts", cartsRouter);
app.use("/users", usersRouter);
app.use("/wishlists", wishlistsRouter);

app.get("/", (req, res) =>
  res.send("API for Jarvis Store ecommerce application.")
);

/**
 * 404 Router Handler.
 * Do not move, this needs to be the last route.
 */
app.use(routeNotFound);

/**
 *Error Handler
 */
app.use(errorHandler);

app.listen(PORT, () => console.log("Server started on port", PORT));
