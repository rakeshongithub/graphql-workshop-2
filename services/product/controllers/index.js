const Product = require("../models");

const deleteProduct = async (req, res) => {
  console.log("trying to delete = ", req.params.id);
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete({ _id: id });
    console.log("deleted Succesfully..");
    res.status(200).send("deleted ..");
  } catch (e) {
    console.log("deleting error");
  }
};

const createNewProduct = async (req, res) => {
  const { id, name, price, category } = req.body;
  const data = {
    name,
    price,
    category,
  };
  try {
    // mongoose model
    console.log("got product post ..", id);
    const newProduct = new Product({
      name,
      price,
      category,
    });
    let product;
    if (id) {
      console.log("trying to update product ..", id);
      product = await Product.findByIdAndUpdate({ _id: id }, data, {
        upsert: true,
      });
    } else {
      console.log("trying to create product ..");
      product = await newProduct.save();
    }

    res.status(201).send(product);
  } catch (e) {
    console.error("---Error creating product ----", e);
    res.status(500).send({ message: "Error creating new product" });
  }
};

const fetchAllProducts = async (req, res) => {
  try {
    console.log("trying to fetch products ..");
    const products = await Product.find({});
    res.status(200).send(products);
  } catch (e) {
    console.error("---Error fetching products ----", e);
    res.status(500).send({ message: "Error fetching product informations" });
  }
};

const fetchProductById = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({ _id: id });
    res.status(200).send(product);
  } catch (e) {
    console.error("---Error fetching products specific ----", e);
    res
      .status(500)
      .send({ message: "Error fetching specific product informations" });
  }
};

module.exports = {
  createNewProduct,
  fetchAllProducts,
  fetchProductById,
  deleteProduct,
};
