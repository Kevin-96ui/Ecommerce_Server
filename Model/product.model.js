const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    productname: {
      type: "String",
      required: true,
    },
    quantity: {
      type: "Number",
      required: true,
    },
    price: {
      type: "Number",
      required: true,
    },
    description: {
      type: "String",
      required: false,
    },
    email: { // Add userEmail field to store the user's email
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);
module.exports = product;
