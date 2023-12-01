const { Router } = require("express");
const { signup, login, insertIcon } = require("../controller/authController");

const router = Router();

router.route("/categoryIcon").post(insertIcon);
router.route("/signup").post(signup);
router.route("/login").post(login);

module.exports = router;
