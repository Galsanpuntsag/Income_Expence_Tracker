const { sql } = require("../config/pgDb");

const createCategory = async (req, res) => {
  try {
    const { iconname, description, category_img, category_color, user_id } =
      req.body;
    console.log(iconname, description, category_img, category_color, user_id);

    const data =
      await sql`INSERT INTO categoryicon (iconname, description,  category_img, category_color, user_id) VALUES( ${iconname}, ${description}, ${category_img}, ${category_color}, ${user_id}) RETURNING *`;
    res.status(201).json({ message: "Category added", categories: data[0] });
    console.log("CREAETED NEW CATE", data);
  } catch (error) {
    console.log("ERcreateCTgr", error);
    res.status(500).json({ message: "Failed create Ctgry" });
  }
};

const getAllCategories = async (req, res) => {
  const { user_id } = req.params;
  try {
    const categories =
      await sql`SELECT * FROM categoryIcon WHERE user_id = ${user_id}`;
    // console.log("CATEGORIES GET REQ", categories);
    res.status(201).json({ message: "success", categories });
  } catch (error) {
    console.log("ERRORLOgin:", error);
    res.status(500).json({ message: "failed" });
  }
  ``;
};

module.exports = { getAllCategories, createCategory };
