const { Router } = require("express");
const { signup } = require("../controller/authController");

const router = Router();
router.route("/").post(signup);
module.exports = router;
