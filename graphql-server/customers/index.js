const axios = require("axios");

const instance = axios.create({
  baseURL: process.env.BASE_URL || "http://localhost:3001/",
});

const registerCustomer = async (customer) => {
  try {
    const { data } = await instance.post("/register", {
      name: customer.name,
      address: customer.address,
      email: customer.email,
      password: customer.password,
    });
    return data;
  } catch (e) {
    console.error("---error registering customer--", e);
    throw e;
  }
};

const login = async (customer) => {
  try {
    const { data } = await instance.post("/login", {
      email: customer.email,
      password: customer.password,
    });

    return data;
  } catch (e) {
    console.error("---error login customers--", e);
    throw e;
  }
};

const fetchCustomers = async () => {
  try {
    const { data } = await instance.get("/customers");
    return data;
  } catch (e) {
    console.error("---error fetching customers--", e);
    throw e;
  }
};

const fetchCustomerById = async (id) => {
  try {
    const { data } = await instance.get(`/customers/${id}`);
    return data;
  } catch (e) {
    console.error("---error fetching specific customer--", e);
    throw e;
  }
};

module.exports = { registerCustomer, fetchCustomers, fetchCustomerById, login };
