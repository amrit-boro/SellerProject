const express = require("express");
const sellerController = require("../controllers/sellerController");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/signup", authController.sellersignup);
router.post("/login", authController.sellerLogin);

router.patch(
  "/updateSeller",
  authController.SellerProtect,
  sellerController.uploadSellerPhoto,
  sellerController.updateSeller
);

router
  .route("/")
  .get(authController.SellerProtect, sellerController.getAllSeller);
router
  .route("/seller-within/:distance/center/:latlng/unit/:unit")
  .get(sellerController.getSellerWithin);

router.route("/:id").get(sellerController.getSeller);

module.exports = router;
