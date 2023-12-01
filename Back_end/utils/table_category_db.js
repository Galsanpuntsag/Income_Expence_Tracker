const { sql } = require("../config/pgDb.js");

const createIconTables = async () => {
  console.log("CREATING TABLE...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;
  await sql`DROP TABLE IF EXISTS users`;

  await sql` CREATE TABLE IF NOT EXISTS categoryIcon(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    iconName VARCHAR(100)  NOT NULL, 
    description TEXT,
    category_img TEXT,
    category_color TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`;
};

createIconTables();
