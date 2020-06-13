const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    price: Number,
    category: String
})


ProductSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

ProductSchema.set('toJSON', {
    virtuals: true
})

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;