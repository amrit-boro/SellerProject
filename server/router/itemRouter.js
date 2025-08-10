const express = require("express");
const productController = require("../controllers/productController");
const authController = require("../controllers/authController");
const userController = require("../controllers/userControllers");
const Product = require("../model/productModel");
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
  authController.protect,
  userController.uploadUserPhoto,
  async (req, res) => {
    try {
      let images = [];

      // Case 1: Single uploaded file
      if (req.file) {
        images = [`${process.env.BASE_URL}/${req.file.filename}`];
      }
      // Case 2: Multiple uploaded files
      else if (req.files && req.files.length > 0) {
        images = req.files.map(
          (file) => `${process.env.BASE_URL}/${file.filename}`
        );
      }
      // Case 3: Image URLs from JSON body
      else if (req.body.images) {
        if (typeof req.body.images === "string") {
          images = [req.body.images];
        } else {
          images = req.body.images;
        }
      }

      const productData = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category,
        images: images,
        seller: req.body.seller,
        location: JSON.parse(req.body.location), // ✅ convert to object
      };

      const product = await Product.create(productData);

      res.status(201).json({
        status: "success",
        data: product,
      });
    } catch (err) {
      res.status(400).json({
        status: "fail",
        message: err.message,
      });
    }
  }
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
  .delete(productController.deleteProduct);

module.exports = router;
