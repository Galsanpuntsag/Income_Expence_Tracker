const { Router } = require("express");

const {
  getAllCategories,
  createCategory,
} = require("../controller/categoryController");

const router = Router();
router.route("/").post(createCategory);
router.route("/:user_id").get(getAllCategories);

module.exports = router;
