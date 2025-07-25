const express = require("express");
const route = express.Router();
const Product = require("../model/productModel");

route.get("/", async (req, res) => {
  try {
    res.send("Hello from product route");
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

route.post("/", async (req, res) => {
  try {
    const data = req.body;
    const product = new Product(data);
    const response = await product.save();
    res
      .status(200)
      .json({ message: "{product Data saved sucessfully", response: response });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = route;
