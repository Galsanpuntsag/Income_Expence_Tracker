const { Router } = require("express");
const { login } = require("../controller/authController");

const router = Router();

router.route("/").post(login);

module.exports = router;
