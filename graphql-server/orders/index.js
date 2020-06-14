const axios = require("axios");

const instance = axios.create({
  baseURL: "http://localhost:3002/",
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

module.exports = { fetchOrders, fetchOrderById };
