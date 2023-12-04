const { sql } = require("../config/pgDb");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  //encript
  //decrypt
  try {
    const { name, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    await sql`INSERT INTO users(email, name, password) VALUES(${email}, ${name}, ${hashedPassword})`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const login = async (req, res) => {
  try {
    const { userEmail, userPassword } = req.body;

    const findUser =
      await sql`SELECT name, email, password FROM users WHERE email='${email}`;

    if (findUser.length === 0) {
      return res.status(400).json({ message: "user not found" });
    }

    const isCheck = bcrypt.compareSync(userPassword, findUser[0].password);

    if (!isCheck) {
      return res.status(400).json({ message: "wrong username or password" });
    }

    const { password, user } = findUser[0];
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
    res.status(500).json({ message: "failed" });
  }
};

const transaction = async (req, res) => {
  try {
    const {
      userId,
      name,
      amount,
      transaction_type,
      description,
      currency_type,
      category_id,
    } = req.body;

    await sql`INSERT INTO categoryIcon(userId, name, amount, transaction_type, description, currency_type, category_id ) VALUES(${userId}, ${name}, ${amount}, ${transaction_type}, ${description}, ${currency_type}, ${category_id}  )`;
    res.status(201).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { signup, login, categoryIcon, transaction };

//MVC
