const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
require("./db.js");
const productRoute = require("./routes/productRoute.js");

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello from e-commerce project");
});

app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log("Application running on port", PORT);
});
