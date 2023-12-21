const { sql } = require("../config/pgDb");

const getAllCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM categoryIcon`;
    res.status(201).json({ message: "success", categories });
  } catch (error) {
    console.log("ERRORLOgin:", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { getAllCategory };
