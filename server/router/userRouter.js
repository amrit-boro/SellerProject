const express = require("express");
const userController = require("../controllers/userControllers");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);

router.use(authController.protect);
router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.updateMe
);
router.route("/").get(userController.getAllusers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
