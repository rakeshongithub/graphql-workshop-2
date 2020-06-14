const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:3003/",
});

const createNewProduct = async (product) => {
  try {
    const { data } = await instance.post("/products", {
      name: product.name,
      category: product.category,
      price: product.price,
    });
    return data;
  } catch (e) {
    console.error("---error while creating product--", e);
    throw e;
  }
};

const fetchProducts = async () => {
  try {
    const { data } = await instance.get("/products");
    return data;
  } catch (e) {
    console.error("---error fetching products--", e);
    throw e;
  }
};

const fetchProductById = async (id) => {
  try {
    const { data } = await instance.get(`/products/${id}`);
    return data;
  } catch (e) {
    console.error("---error fetching specific product--", e);
    throw e;
  }
};

module.exports = { fetchProducts, fetchProductById, createNewProduct };
