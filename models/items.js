const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    type: String,
    name: String,
    price: Number,
    imgURL: String
})

const ItemModel = mongoose.model('items' , itemSchema);

module.exports = ItemModel;