// server.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./index.js");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  console.log("DB connection successful!");
});

const port = 3002;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
