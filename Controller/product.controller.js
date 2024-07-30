const product = require("../Model/product.model.js");

const getProducts = async (req, res) => {// To get all Product Details
  try {
    const products = await product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const AllProduct = async (req, res) => {
  const { email } = req.params;
  try {
    const products = await product.find({ email }); // Ensure the field name matches your model
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createProducts = async (req, res) => { // To CREATE a Product
  try {
    const products = await product.create(req.body);
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProducts = async (req, res) => { // To DELETE a Product
  try {
    const { id } = req.params;
    await product.findByIdAndDelete(id);
    res.status(200).json("Product Deleted Successfully!");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProducts = async (req, res) => { // To UPDATE a Product
  try {
    const { id } = req.params;
    const products = await product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!products) {
      return res.status(404).json("Product doesn't exist");
    }
    const updatedProduct = await product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  AllProduct,
  createProducts,
  deleteProducts,
  updateProducts,
};
