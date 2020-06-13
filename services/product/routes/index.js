const express = require('express');
const {createNewProduct,fetchAllProducts,fetchProductById, deleteProduct} = require('../controllers');
const router = express.Router();

router.post('/products', createNewProduct);
router.get('/products', fetchAllProducts);
router.get('/products/:id', fetchProductById);
router.post('/deleteProduct', deleteProduct);

module.exports = router;