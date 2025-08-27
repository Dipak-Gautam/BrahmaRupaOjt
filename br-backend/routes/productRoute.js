const express = require("express");
const multer = require("multer");
const route = express.Router();
const Product = require("../model/productModel");
const { jwtAuthMiddleWare } = require("../jwt");
const cloudinary = require("../cloudinary");

const storage = multer.memoryStorage();
const upload = multer({ storage });

route.get("/", async (req, res) => {
  try {
    const productData = await Product.find();
    res
      .status(200)
      .json({ message: "data fetch sucessfully", data: productData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

route.post("/", jwtAuthMiddleWare, upload.single("file"), async (req, res) => {
  try {
    const { productDetail } = req.body;
    const file = req.file;
    console.log("product detail", productDetail);
    console.log("file", file);
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "products" }, // optional folder
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(file.buffer);
    });

    console.log("Uploaded to Cloudinary:", result);
    let data = JSON.parse(productDetail);
    data.image = result.url;
    let tempObj = {
      public_id: result.public_id,
      asset_id: result.asset_id,
      url: result.url,
      secure_url: result.secure_url,
      asset_folder: result.asset_folder,
    };
    data.cloudinary = tempObj;

    const product = new Product(data);
    const response = await product.save();
    res
      .status(200)
      .json({ message: "{product Data saved sucessfully", response: response });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

route.patch("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const { id, ...updatedData } = req.body;
    const response = await Product.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    res
      .status(200)
      .json({ message: "Data updated sucessfully", response: response });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

route.delete("/", jwtAuthMiddleWare, async (req, res) => {
  try {
    const { id } = req.body;
    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: "Product deleted sucessfully" });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = route;
