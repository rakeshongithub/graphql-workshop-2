const express = require("express");
const {
  registerNewCustomer,
  loginCustomer,
  fetchAllCustomers,
  fetchCustomerById,
} = require("../controllers");
const router = express.Router();

router.post("/register", registerNewCustomer);
router.post("/login", loginCustomer);
router.get("/customers", fetchAllCustomers);
router.get("/customers/:id", fetchCustomerById);

module.exports = router;
