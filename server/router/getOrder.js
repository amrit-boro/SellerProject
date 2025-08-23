const express = require("express");
const getOrderControllers = require("../controllers/ordersController");
const router = express.Router();

router.route("/").get(getOrderControllers.getOrder);

module.exports = router;
