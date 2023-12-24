const { sql } = require("../config/pgDb");

const createCategory = async (req, res) => {
  try {
    const { icon_name, description, category_img, category_color, user_id } =
      req.body;
    await sql`INSERT INTO categoryIcon (iconName, description,  category_img, category_color, user_id) VALUES (${icon_name} , ${description}, ${category_img}, ${category_color}, ${user_id})`;
    res.status(201).json({ message: "Category added" });
    console.log("CREAETED NEW CATE");
  } catch (error) {
    console.log("ERcreateCTgr", error);
    res.status(500).json({ message: "Failed create Ctgry" });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM categoryIcon`;
    // console.log("CATEGORIES GET REQ", categories);
    res.status(201).json({ message: "success", categories });
  } catch (error) {
    console.log("ERRORLOgin:", error);
    res.status(500).json({ message: "failed" });
  }
  ``;
};

module.exports = { getAllCategory, createCategory };
