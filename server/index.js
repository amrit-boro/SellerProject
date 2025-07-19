// app.js
const express = require("express");
const userRouter = require("./router/userRouter");
const itemRouter = require("./router/itemRouter");
const seller = require("./router/sellerRouter");
const realUser = require("./router/realRouter");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
const getProduct = require("./router/getProduct");

// Middleware

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Route to send index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
// app.use("/user", userRouter);

app.use("/api/v1/product", itemRouter); // get all the products and only one product by Id
app.use("/api/v1/seller", seller); // get all the sellers and only one seller by Id
// app.use("/api/v1/products", realUser);
app.use("/api/v1/getAllproducts", getProduct); // get all products of a seller by seller Id

//

module.exports = app;
