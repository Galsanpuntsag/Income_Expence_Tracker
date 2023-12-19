const { sql } = require("../config/pgDb");

const updateUser = async (req, res) => {
  try {
    const { currency_type, balance } = req.body;
    const { id } = req.params;
    console.log("SSSETUPDATA", currency_type, balance, id);

    const data =
      await sql`UPDATE users SET currency_type=${currency_type}, balance=${balance} WHERE id=${id} RETURNING *`;

    const { password, ...user } = data[0];
    res.status(200).json({ message: "success", user });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { updateUser };