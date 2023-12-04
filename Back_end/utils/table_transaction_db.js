const { sql } = require("../config/pgDb.js");

const createTables = async () => {
  console.log("CREATING TABLE...");
  await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; `;
  //   await sql`CREATE TYPE type AS ENUM('INC', 'EXP')`;

  await sql` CREATE TABLE IF NOT EXISTS transaction (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id uuid REFERENCES users(id),
    name TEXT NOT NULL,
    amount REAL NOT NULL,
    transaction_type type,
    description TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_id uuid REFERENCES categoryicon(id)
)`;
};

createTables();
