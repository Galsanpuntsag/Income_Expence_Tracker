const { Router } = require("express");
const { signup, login, categoryIcon } = require("../controller/authController");

const router = Router();

router.route("/categoryIcon").post(categoryIcon);
router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
