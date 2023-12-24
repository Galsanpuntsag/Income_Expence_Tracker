const { Router } = require("express");

const {
  getAllCategory,
  createCategory,
} = require("../controller/categoryController");

const router = Router();
router.route("/").post(createCategory);
router.route("/").get(getAllCategory);

module.exports = router;
