const fs = require("fs");
const mongoose = require("mongoose");
const Product = require("../model/productModel");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB).then(() => {
  console.log("DB connection successful !");
});

// READ THE FILE

const products = JSON.parse(
  fs.readFileSync(`${__dirname}/items.simple.json`, "utf-8")
);

// IMPORT THE DATA INTO  DATABASE....

const imporData = async () => {
  try {
    await Product.create(products);
    console.log("Data successfully loaded");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteProduct = async () => {
  try {
    await Product.deleteMany();
    console.log("Data successfully deleted");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] == "--import") {
  imporData();
} else if (process.argv[2] == "--delete") {
  deleteProduct();
}

console.log(process.argv);
