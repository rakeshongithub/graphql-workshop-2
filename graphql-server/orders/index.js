const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.ORDER_SERVICE_URL || "http://localhost:3002/",
});

const fetchOrders = async () => {
  try {
    const { data } = await instance.get("/orders");
    return data;
  } catch (e) {
    console.error("---error fetching orders--", e);
    throw e;
  }
};

const fetchOrderById = async (id) => {
  try {
    const { data } = await instance.get(`/orders/${id}`);
    return data;
  } catch (e) {
    console.error("---error fetching specific order--", e);
    throw e;
  }
};

const createNewOrder = async (order) => {
  try {
    const { data } = await instance.post("/orders", { ...order });
    const products = [];
    data.products.forEach((item) => {
      products.push(item[0]);
    });
    return {
      ...data,
      products: products,
    };
  } catch (e) {
    console.error("---error creating new order--", e);
    throw e;
  }
};

module.exports = { fetchOrders, fetchOrderById, createNewOrder };
