const { sql } = require("../config/pgDb");

const createCategory = async (req, res) => {
  try {
    const { iconname, description, category_img, category_color } = req.body;
    console.log(iconname, description, category_img, category_color);

    const data =
      await sql`INSERT INTO categoryicon (iconname, description,  category_img, category_color) VALUES( ${iconname}, ${description}, ${category_img}, ${category_color}) RETURNING *`;
    res.status(201).json({ message: "Category added", data });
    console.log("CREAETED NEW CATE", data);
  } catch (error) {
    console.log("ERcreateCTgr", error);
    res.status(500).json({ message: "Failed create Ctgry" });
  }
};

const getAllCategories = async (req, res) => {
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

module.exports = { getAllCategories, createCategory };
