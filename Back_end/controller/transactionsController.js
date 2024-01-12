const { useState } = require("react");
const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  console.log(req.params);
  const { user_id } = req.params;
  console.log("USERIDtransac: ", user_id);
  try {
    console.log("getTrans");
    const transactions =
      await sql`SELECT tr.name, tr.id, tr.create_at, tr.amount, tr.transaction_type, ci.category_img, ci.category_color FROM transaction tr INNER JOIN categoryicon ci ON tr.category_id=ci.id WHERE tr.user_id=${user_id} ORDER BY create_at DESC`;
    console.log("INNERmade", transactions);
    res
      .status(200)
      .json({ message: "SUCCESSful get transaction", transactions });
  } catch (error) {
    console.log("TransactionERRORjoin", error);
    res.status(500).json({ message: "FAILED" });
  }
};

const createTransaction = async (req, res) => {
  try {
    const {
      user_id,
      category_id,
      transaction_name,
      amount,
      transaction_type,
      description,
      updated_at,
    } = req.body;

    const data =
      await sql`INSERT INTO transaction(user_id,  category_id, name, amount, transaction_type, description, updated_at) VALUES(${user_id},  ${category_id}, ${transaction_name}, ${amount}, ${transaction_type}, ${description}, ${updated_at}) RETURNING *`;
    res
      .status(201)
      .json({ message: "success create transaction", transaction: data[0] });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json({ message: "failed here" });
  }
};

const getTotalExpInc = async (req, res) => {
  const { user_id } = req.params;
  console.log("FFFExpInc", user_id);
  try {
    const data =
      await sql`SELECT tr.transaction_type, SUM(amount) as total FROM transaction tr WHERE tr.user_id=${user_id} GROUP BY transaction_type `;
    console.log("EIdata", data);
    const [inc] = data.filter((el) => el.transaction_type === "INC");
    const [exp] = data.filter((el) => el.transaction_type === "EXP");
    console.log("INC", inc);
    console.log("EXP", exp);
    res.status(201).json({
      message: "successful",
      totalInc: inc.total,
      totalExp: exp.total,
    });
  } catch (error) {
    console.log("EI", error);
    res.status(500).json({ message: "Failed get income and expence" });
  }
};

const getChartData = async (req, res) => {
  try {
    const { user_id } = req.params;
    //_________________________
    const doughnutChart = await sql`
    SELECT 
    ct.iconname as category_name, 
    SUM(amount) as total 
  FROM transaction tr 
  INNER JOIN 
    categoryicon ct ON tr.category_id=ct.id
    WHERE ct.user_id=tr.user_id
  GROUP BY category_name;`;
    //_________________________

    const barChart = await sql`SELECT
    EXTRACT(MONTH FROM updated_at) AS month,
    TO_CHAR(updated_at, 'Month') AS month_name,
    SUM(CASE WHEN transaction_type = 'INC' THEN amount ELSE 0 END) AS income,
    SUM(CASE WHEN transaction_type = 'EXP' THEN amount ELSE 0 END) AS expence
  FROM
      transaction
      WHERE 
      user_id=${user_id}
  GROUP BY
      month, month_name
  ORDER BY
      month;`;
    console.log("Barchar", barChart);
    const labels = barChart.map((row) => row.month_name);
    const incomeData = barChart.map((row) => row.income);
    const expenceData = barChart.map((row) => row.expence);
    console.log("ExpData", expenceData);

    //doughnot data labels
    const dlabels = doughnutChart.map((e) => e.category_name);
    const data = doughnutChart.map((e) => e.total);

    res.status(201).json({
      message: "succes",
      doughnutChart: { labels: dlabels, data },
      barChart: { labels, incomeData, expenceData },
    });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
  getTotalExpInc,
  getChartData,
  //   getTransaction,
  //   putTransaction,
  //   deleteTransaction,
};

// const getTransaction = async (req, res) => {
//   try {
//     const { id } = req.body;
//     console.log("ID: ", id);

//     const response = await sql`SELECT * FROM transaction WHERE user_id=${id}`;
//     res.status(201).json({ message: "success", response });

//     // console.log("find transaction: ", response);

//     if (response.length === 0) {
//       return res.status(400).json({ message: "User not foung" });
//     }
//   } catch (error) {
//     console.log("ERROR", error);
//     res.status(500).json({ message: "Failed" });
//   }
// };

// const putTransaction = async (req, res) => {
//   try {
//     const { id } = req.body;
//     console.log("ID: ", id);

//     const putTransaction =
//       await sql`UPDATE transaction SET name='Drink' WHERE user_id=${id}`;
//     res.status(201).json({ message: "Success", putTransaction });

//     if (putTransaction.length === 0) {
//       return res.status(400).json({ message: "Transaction Not Found" });
//     }
//   } catch (error) {
//     console.log("ERR:", error);
//     res.status(500).json({ message: "Failed" });
//   }
// };

// const deleteTransaction = async (req, res) => {
//   try {
//     const { id } = req.body;
//     console.log("ID: ", id);

//     const deleteTransaction =
//       await sql`DELETE FROM transaction WHERE user_id=${id}`;
//     res.status(201).json({ message: "Success", deleteTransaction });

//     if (deleteTransaction.length === 0) {
//       return res.status(400).json({ message: "Transaction Not Found" });
//     }
//   } catch (error) {
//     console.log("ERR:", error);
//     res.status(500).json({ message: "Failed" });
//   }
// };
