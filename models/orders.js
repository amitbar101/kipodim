const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    time: Date,
    items : Array,
    price: Number,
    status: String

})


const orderModel = mongoose.model('order' , orderSchema);

module.exports = orderModel;