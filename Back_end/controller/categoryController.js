const { sql } = require("../config/pgDb");

const createCategory = async (req, res) => {
  try {
    const { user_id, iconname, description, category_img, category_color } =
      req.body;
    console.log(iconname, description, category_img, category_color);

    await sql`INSERT INTO categoryicon (user_id, iconname, description,  category_img, category_color) VALUES(${user_id}, ${iconname}, ${description}, ${category_img}, ${category_color}) RETURNING *`;
    res.status(201).json({ message: "Category added" });
    console.log("CREAETED NEW CATE");
  } catch (error) {
    console.log("ERcreateCTgr", error);
    res.status(500).json({ message: "Failed create Ctgry" });
  }
};

const getAllCategories = async (req, res) => {
  try {
    const { user_id } = req.params;
    console.log("CAtegetUserId", user_id);
    const categories =
      await sql`SELECT * FROM categoryIcon WHERE id=${user_id}`;
    // console.log("CATEGORIES GET REQ", categories);
    res.status(201).json({ message: "success", categories });
  } catch (error) {
    console.log("ERRORLOgin:", error);
    res.status(500).json({ message: "failed" });
  }
  ``;
};

module.exports = { getAllCategories, createCategory };
