const { sql } = require("../config/pgDb.js");

const createTables = async () => {
  // console.log("CREATING TABLE...");
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;
  //----
  // console.log("Deleting..");
  // await sql`DROP TABLE users;`;
  // console.log("Deleted that table");
  // ----
  await sql`  CREATE TABLE IF NOT EXISTS users(
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(50)  UNIQUE NOT NULL,
    name VARCHAR(50)  NOT NULL,
    password TEXT  NOT NULL ,
    avatar_img TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
};

createTables();
