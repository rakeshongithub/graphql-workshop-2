const express = require('express');
const { addOrder, addOrderProduct, fetchAllOrders, fetchOrderById, fetchAllOrderProducts, fetchOrderProductsById } = require('../controllers');
const router = express.Router();

router.post('/orders', addOrder);
router.post('/orderProducts', addOrderProduct);
router.get('/orders', fetchAllOrders);
router.get('/orders/:id', fetchOrderById);
router.get('/orderProducts', fetchAllOrderProducts);
router.get('/orderProducts/:id', fetchOrderProductsById);

module.exports = router;