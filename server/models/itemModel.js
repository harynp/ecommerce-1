var mongoose = require('mongoose')
var Schema = mongoose.Schema

var itemSchema = new Schema({
  nameItem  : {type: String},
  price     : {type: Number},
  qty       : {type: Number, default: 1},
  gambar    : {type: String},
  createdAt : {type: Date, default: Date.now }
})

var Item = mongoose.model('Item', itemSchema)

module.exports = Item
