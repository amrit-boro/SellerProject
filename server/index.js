const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");

// Routers
const userRouter = require("./router/userRouter");
const itemRouter = require("./router/itemRouter");
const sellerRouter = require("./router/sellerRouter");
const getProductRouter = require("./router/getProduct");

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Data sanitization against NoSQL query injection
// app.use(mongoSanitize());
// Data sanitization against XSS attacks
// app.use(xss());

app.use(morgan("dev"));

// const limiter = rateLimit({
//   max: 100,
//   windowMs: 60 * 60 * 1000, // 1 hour
//   message: "Too many requests from this IP, please try again in an hour!",
// });

// Serve static files
// app.use("/api", limiter);
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // console.log(req.headers);
  next();
});

// Index route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Use all routers
app.use("/api/v1/user", userRouter);
app.use("/api/v1/product", itemRouter);
app.use("/api/v1/seller", sellerRouter);
app.use("/api/v1/getAllproducts", getProductRouter);

// Catch-all 404 route (keep this at the very bottom)
// app.all("*", (req, res) => {
//   res.status(404).json({ error: "Route not found" });
// });

module.exports = app;
