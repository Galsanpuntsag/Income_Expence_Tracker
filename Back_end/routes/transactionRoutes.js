const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  //   getTransaction,
  //   putTransaction,
  //   deleteTransaction,
} = require("../controller/transactionsController");

const router = Router();

//-----------
router.route("/").post(createTransaction);
router.route("/:user_id").get(getAllTransaction);
// router.route("/getTransaction").get(getTransaction);
// router.route("/putTransaction").put(putTransaction);
// router.route("/deleteTransaction").delete(deleteTransaction);

module.exports = router;
