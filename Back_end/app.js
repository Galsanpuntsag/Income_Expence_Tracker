const express = require("express");
require("dotenv").config();
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT;
const app = express();

const authRoutes = require("./routes/authRoutes");
const imgRoutes = require("./routes/imgRoutes");
const userRoutes = require("./routes/userRoutes");
const transactionRoutes = require("./routes/userRoutes");

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/api/image", imgRoutes);
app.use("/users/", userRoutes);
app.use("/transaction", transactionRoutes);

app.listen(PORT, () => {
  console.log(`run ${PORT} at the http.`);
});
