const express = require('express');
const cors = require('cors');
require('dotenv').config();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

const port = process.env.PRODUCT_SERVICE_PORT || 3003;
const url = process.env.PRODUCT_DB_URL || 'mongodb://127.0.0.1:27018/workshop-product-db';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, (err)=> {
    if(err){
        console.error('---Error connecting to product db');
    }else {
        console.log('---Successfully connected to product db');
    }
})

const app = express();
app.use(cors());

app.use(express.json());

app.use('/', productRoutes);

app.listen(port, () => {
    console.log(`product service is listening on port ${port}`);
});
