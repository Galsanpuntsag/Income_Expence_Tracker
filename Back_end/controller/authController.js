const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  //encript
  //decrypt
  try {
    console.log("SIGNup");
    const { name, email, password } = req.body;
    const findUser = await sql`SELECT email FROM users WHERE email=${email}`;
    console.log("FINDD:", findUser);

    if (findUser.length > 0) {
      return res.status(400).json({ message: "User email is already exist. " });
    }
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data =
      await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword}) RETURNING id`;
    const { id } = data[0];
    res
      .status(201)
      .json({ message: "USER registered successful", user: { id } });
    console.log("USERSIGNUPdata: ", data);
  } catch (error) {
    console.log("ERRORSIGNUP", error);
    res.status(500).json({ message: " FAILED" });
  }
};

const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const findUser = await sql`SELECT * FROM users WHERE email=${userEmail}`;

    if (findUser.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }

    const isCheck = bcrypt.compareSync(userPassword, findUser[0].password);
    console.log("LOGINuser:", isCheck);

    if (!isCheck) {
      return res.status(400).json({ message: "wrong username or password" });
    }

    const { password, ...user } = findUser[0];
    res.status(201).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const categoryIcon = async (req, res) => {
  try {
    const { iconName, category_img, category_color } = req.body;

    await sql`INSERT INTO categoryIcon(iconName, category_img, category_color) VALUES(${iconName}, ${category_img}, ${category_color})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log("ERRORLOgin:", error);
    res.status(500).json({ message: "failed" });
  }
};
//--------------
const transaction = async (req, res) => {
  try {
    const {
      user_id,
      name,
      amount,
      transaction_type,
      description,
      category_id,
    } = req.body;

    await sql`INSERT INTO transaction(user_id, name, amount, transaction_type, description, category_id ) VALUES(${user_id}, ${name}, ${amount}, ${transaction_type}, ${description}, ${category_id})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json({ message: "failed here" });
  }
};

const getTransaction = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("ID: ", id);

    const response = await sql`SELECT * FROM transaction WHERE user_id=${id}`;
    res.status(201).json({ message: "success", response });

    // console.log("find transaction: ", response);

    if (response.length === 0) {
      return res.status(400).json({ message: "User not foung" });
    }
  } catch (error) {
    console.log("ERROR", error);
    res.status(500).json({ message: "Failed" });
  }
};

const putTransaction = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("ID: ", id);

    const putTransaction =
      await sql`UPDATE transaction SET name='Drink' WHERE user_id=${id}`;
    res.status(201).json({ message: "Success", putTransaction });

    if (putTransaction.length === 0) {
      return res.status(400).json({ message: "Transaction Not Found" });
    }
  } catch (error) {
    console.log("ERR:", error);
    res.status(500).json({ message: "Failed" });
  }
};

const deleteTransaction = async (req, res) => {
  try {
    const { id } = req.body;
    console.log("ID: ", id);

    const deleteTransaction =
      await sql`DELETE FROM transaction WHERE user_id=${id}`;
    res.status(201).json({ message: "Success", deleteTransaction });

    if (deleteTransaction.length === 0) {
      return res.status(400).json({ message: "Transaction Not Found" });
    }
  } catch (error) {
    console.log("ERR:", error);
    res.status(500).json({ message: "Failed" });
  }
};

//---------------

module.exports = {
  signup,
  login,
  categoryIcon,
  transaction,
  getTransaction,
  putTransaction,
  deleteTransaction,
};

//MVC
