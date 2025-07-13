const express = require("express");
const realControlllers = require("../controllers/realControllers");
const router = express.Router();

router.route("/").get(realControlllers.getReal);

module.exports = router;
