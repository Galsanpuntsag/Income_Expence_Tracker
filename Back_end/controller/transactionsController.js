const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { user_id } = req.params;
  console.log("USERID: ", user_id);
  try {
    const transactions =
      await sql`SELECT * FROM transaction tr INNER JOIN createIcon ci ON tr.category_id=ci.id WHERE tr.user_id=${user_id} ORDER BY created_at DESC`;
    res.status(200).json({ message: "SUCCESS transaction JOIN", transactions });
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

    await sql`INSERT INTO transaction(user_id,  category_id  transaction_name, amount, transaction_type, description, updated_at) VALUES(${user_id}, ${transaction_name}, ${amount}, ${transaction_type}, ${description}, ${category_id}, ${updated_at})`;
    res.status(201).json({ message: "success create transaction" });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json({ message: "failed here" });
  }
};

module.exports = {
  createTransaction,
  getAllTransaction,
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
