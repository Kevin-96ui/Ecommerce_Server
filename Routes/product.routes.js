const express = require("express");
const router = express.Router();
const {
  getProducts,
  AllProduct,
  createProducts,
  deleteProducts,
  updateProducts,
} = require("../Controller/product.controller.js");

router.get("/", getProducts);
router.get("/:email", AllProduct);
router.post("/", createProducts);
router.delete("/:id", deleteProducts);
router.put("/:id", updateProducts);

module.exports = router;
