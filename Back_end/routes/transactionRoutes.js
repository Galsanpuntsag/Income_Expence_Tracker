const { Router } = require("express");
const {
  createTransaction,
  getAllTransaction,
  getTotalExpInc,
  DoughnutData,
  BarData,
  // getAllIncome,
  //   getTransaction,
  //   putTransaction,
  //   deleteTransaction,
} = require("../controller/transactionsController");

const router = Router();

//-----------
router.route("/bar/:user_id").get(BarData);
router.route("/doughnut/:user_id").get(DoughnutData);
router.route("/total/:user_id").get(getTotalExpInc);
router.route("/:user_id").get(getAllTransaction);
router.route("/").post(createTransaction);

// router.route("/totalIncome").get(getAllIncome);
// router.route("/getTransaction").get(getTransaction);
// router.route("/putTransaction").put(putTransaction);
// router.route("/deleteTransaction").delete(deleteTransaction);

module.exports = router;
