const mongoose = require('mongoose')
const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var trasactionSchema = new Schema({
  customers : {type: Schema.Types.ObjectId, ref: 'User'},
  itemList  : [{nameItem: {type:String}, price: {type:Number}, qty: {type:Number}}],
  date      : {type: Date, default: Date.now }
})

const Transaction = mongoose.model('Transaction', trasactionSchema)

module.exports = Transaction
