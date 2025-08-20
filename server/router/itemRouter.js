const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userControllers");
const Product = require("../model/productModel");
const sellerController = require("../controllers/sellerController");
const { route } = require("..");

const router = express.Router();

// router
//   .route("/top-5-cheap")
//   .get(productController.aliasTopProduct, productController.getAllProduct);

router
  .route("/getAllproductsBySellerId/:sellerId")
  .get(productController.getAllProductBysellerId);

router.post(
  "/addproduct",
  authController.SellerProtect,
  userController.uploadUserPhoto,
  productController.addproduct
);

router
  .route("/")
  .get(productController.getAllProduct)
  .post(productController.createProduct);
router
  .route("/product-within/:distance/center/:latlng/unit/:unit")
  .get(productController.getProductsWithin);

router
  .route("/distances/:latlng/unit/:unit")
  .get(productController.getDistances);

router
  .route("/:id")
  .get(productController.getProduct)
  .patch(productController.updateProduct)
  .delete(authController.SellerProtect, productController.deleteProduct);

module.exports = router;
