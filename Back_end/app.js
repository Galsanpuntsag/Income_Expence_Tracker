const express = require("express");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT;
const app = express();
const { router } = require("./routes/authRoutes");

app.use(express.json());

app.use("/auth", authRoutes);
app.listen(PORT, () => {
  console.log(`run ${PORT} at the http.`);
});
