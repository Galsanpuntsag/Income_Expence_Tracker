const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  const { user_id } = req.params;
  console.log("USERID: ", user_id);
  try {
    const transactions = await sql`SELECT * FROM transaction`;
    res
      .status(200)
      .json({ message: "SUCCESSful get transaction", transactions });
  } catch (error) {
    console.log("TransactionERRORjoin", error);
    res.status(500).json({ message: "FAILED" });
  }
};

const createTransaction = async (req, res) => {
  console.log("REQ", req.body);
  try {
    console.log("TRANSACtion");
    const {
      user_id,
      category_id,
      transaction_name,
      amount,
      transaction_type,
      description,
      updated_at,
    } = req.body;

    console.log(
      user_id,
      category_id,
      transaction_name,
      amount,
      transaction_type,
      description,
      updated_at
    );

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

// const getAllIncome = async(req, res) => {
//   try{
//    const {user_id} = req.body

//    const data =
//   }
// }

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
