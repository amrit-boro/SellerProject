const express = require("express");
const sellerController = require("../controllers/sellerController");
const router = express.Router();

router
  .route("/")
  .get(sellerController.getAllSeller)
  .post(sellerController.createSeller);

router.route("/:id").get(sellerController.getSeller);

module.exports = router;
