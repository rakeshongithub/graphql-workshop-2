const mongoose = require('mongoose');

const OrderProduct = require('./order-product');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customerId: String,
    totalOrderValue: Float,
    shippingAddress: String,
    paymentMethod: String,
    products: [OrderProduct]
})

OrderSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

OrderSchema.set('toJSON', {
    virtuals: true
})

const Order = mongoose.model('orders', OrderSchema);

module.exports = Order;