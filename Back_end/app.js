const express = require("express");

const { sql } = require("./config/pgDb");
const PORT = process.env.PORT;
const app = express();

app.use("express.json", userRouter);

app.get("/", async (req, res) => {
  try {
    const result = await sql`SELECT * FROM employee`;
    console.log("answer", result);
    res.send("Welcome Expence Tracker Rest API");
  } catch (error) {
    res.status(console.log("aldaa garlaa dahin otoldonuu"));
  }
});

app.listen(PORT, () => {
  console.log(`run ${PORT} at the http.`);
});
