const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const path = require("path");
const cors = require("cors");

const app = express();

const authRoutes = require("./routes/authRoutes");
const imgRoutes = require("./routes/imgRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionsRoutes = require("./routes/transactionRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/api/image", imgRoutes);
app.use("/users/", userRoutes);
app.use("/transactions/", transactionsRoutes);
app.use("/categories/", categoryRoutes);

app.get("/", (req, res) => {
  res.send("Welcome Income and Expense API.");
});

app.listen(PORT, () => {
  console.log(`run ${PORT} at the http.`);
});
