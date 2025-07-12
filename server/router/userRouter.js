const express = require("express");
const userController = require("../controllers/userControllers");
const router = express.Router();

router.route("/").get(userController.getAllusers);

router
  .route("/:id")
  .get(userController.getUser)
  .delete(userController.deleteUser);

module.exports = router;
