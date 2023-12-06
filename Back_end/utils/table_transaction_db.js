const { sql } = require("../config/pgDb.js");

const createTables = async () => {
  // console.log("CREATING TABLE...");
  // await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;
  // console.log("Create Type...");
  // await sql`CREATE TYPE type AS ENUM('INC', 'EXP')`;
  // console.log("Create Type...");
  // // ----
  // console.log("Deleting..");
  // await sql`DROP TABLE transaction;`;
  // console.log("Deleted that table");
  // ----

  await sql` CREATE TABLE IF NOT EXISTS transaction (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users(id),
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    transaction_type type,
    description TEXT,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id uuid REFERENCES categoryicon(id)
    )`;
  console.log("CREATED");
};

createTables();
