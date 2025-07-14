const express = require("express");
const getProductController = require("../controllers/getProductController");
const router = express.Router();

router.route("/:id").get(getProductController.getAllproducts);

module.exports = router;
