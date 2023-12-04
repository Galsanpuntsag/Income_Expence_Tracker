const { Router } = require("express");
const {
  categoryIcon,
  signup,
  login,
  transaction,
} = require("../controller/authController");

const router = Router();

router.route("/categoryIcon").post(categoryIcon);
router.route("/transaction").post(transaction);
router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
