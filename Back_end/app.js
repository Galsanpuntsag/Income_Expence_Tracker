const express = require("express");
require("dotenv").config();
const path = require("path");

const PORT = process.env.PORT;
const app = express();

const authRoutes = require("./routes/authRoutes");
const imgRoutes = require("./routes/imgRoutes");

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images/")));

app.use("/auth", authRoutes);
app.use("/api/image", imgRoutes);

app.listen(PORT, () => {
  console.log(`run ${PORT} at the http.`);
});