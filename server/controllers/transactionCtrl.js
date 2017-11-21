const Trans = require('../models/transactionModel')


class Transaction {
  static submitCart(req,res) {
    console.log('INI CART',req.body);
    Trans.create({
      customers : req.body.customers,
      itemList : req.body,
      date: new Date()
    })
    .then(transaksi => {
      res.send(transaksi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static findAllTransaction (req,res) {
    Trans.find({})
    .populate('customers')
    .populate('itemList')
    .then(transaksi => {
      res.send(transaksi)
    })
    .catch(err => {
      console.log(err);
    })
  }

  static deleteTransaction (req,res) {
    Trans.findOneAndRemove({_id: req.params.id})
    .then(transaksi => {
      res.send(transaksi)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteAll (req,res) {
    Trans.find({})
    .then(transaksi => {
      res.send(transaksi)
    })
    .catch(err=> {
      res.send(err)
    })
  }
}

module.exports = Transaction
