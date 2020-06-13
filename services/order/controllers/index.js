const { Order, OrderProduct } = require('../models');

const addOrder = async (req, res) => {
    try {
        const { customerId, totalOrderValue, shippingAddress, paymentMethod, products } = req.body;
        // mongoose model
        const newOrder = new Order({
            customerId,
            totalOrderValue,
            shippingAddress,
            paymentMethod,
            products
        })
        const order = await newOrder.save();
        res.status(201).send(order);
    } catch (e) {
        console.error('---Error adding order ----', e);
        res.status(500).send({ message: 'Error adding order' });
    }
}

const addOrderProduct = async (req, res) => {
    try {
        const { productId, quantity, price } = req.body;
        // mongoose model
        const newOrderProduct = new OrderProduct({
            productId,
            quantity,
            price
        })
        const orderProduct = await newOrderProduct.save();
        res.status(201).send(orderProduct);
    } catch (e) {
        console.error('---Error adding order product ----', e);
        res.status(500).send({ message: 'Error adding order product' });
    }
}

const fetchAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({});
        res.status(200).send(orders);
    } catch (e) {
        console.error('---Error fetching orders ----', e);
        res.status(500).send({ message: 'Error fetching order informations' });
    }
}

const fetchOrderById = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await Order.findOne({ _id: id });
        res.status(200).send(order);
    } catch (e) {
        console.error('---Error fetching order specific ----', e);
        res.status(500).send({ message: 'Error fetching specific order informations' });
    }
}

const fetchAllOrderProducts = async (req, res) => {
    try {
        const orderProduct = await OrderProduct.find({});
        res.status(200).send(orderProduct);
    } catch (e) {
        console.error('---Error fetching order products ----', e);
        res.status(500).send({ message: 'Error fetching  product informations' });
    }
}

const fetchOrderProductsById = async (req, res) => {
    const id = req.params.id;
    try {
        const order = await Order.findOne({ _id: id });
        res.status(200).send(order);
    } catch (e) {
        console.error('---Error fetching order product specific ----', e);
        res.status(500).send({ message: 'Error fetching specific order product informations' });
    }
}

module.exports = {
    addOrder,
    addOrderProduct,
    fetchAllOrders,
    fetchOrderById,
    fetchAllOrderProducts,
    fetchOrderProductsById
};