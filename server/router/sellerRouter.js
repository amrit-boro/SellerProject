const express = require("express");
const sellerController = require("../controllers/sellerController");
const router = express.Router();

router.route("/").get(sellerController.getAllSeller);

router
  .route("/:id")
  .get(sellerController.getSeller)
  .patch(sellerController.updataSeller);

module.exports = router;
