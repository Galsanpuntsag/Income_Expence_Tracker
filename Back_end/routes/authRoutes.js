const { Router } = require("express");
const {
  categoryIcon,
  signup,
  login,
  transaction,
  getTransaction,
  putTransaction,
  deleteTransaction,
} = require("../controller/authController");

const router = Router();

router.route("/categoryIcon").post(categoryIcon);
router.route("/signup").post(signup);
router.route("/login").post(login);

//-----------
router.route("/transaction").post(transaction);
router.route("/getTransaction").get(getTransaction);
router.route("/putTransaction").put(putTransaction);
router.route("/deleteTransaction").delete(deleteTransaction);

//-----------
module.exports = router;
