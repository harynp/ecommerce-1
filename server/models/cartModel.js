const mongoose = require('mongoose')
const Schema = mongoose.Schema

var cartSchema = new Schema({
  nameItem: {type: String},
  price: {type: Number, default: 0},
  gambar: {type: String},
  qty: {type: Number, default: 1}
})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart
