const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderProductSchema = new Schema({
    productId: String,
    quantity: Int,
    price: Float
})

const OrderProduct = mongoose.model('orderProduct', OrderProductSchema);

module.exports = OrderProduct;