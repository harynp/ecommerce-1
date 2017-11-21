const Items = require('../models/itemModel')
const mongoose = require('mongoose')
var multer  = require('multer')
const ObjectId = require('mongodb').ObjectId
var upload = multer({ dest: 'Uploads/' })

class Item {
  static getItem (req,res) {
    Items.find()
    .then(findItem => res.send(findItem))
    .catch(err => res.send(err))
  }

  static postItem (req,res) {
    Items.create({
      'nameItem': req.body.nameItem,
      'price'   : req.body.price,
      'qty'     : req.body.qty,
      'gambar'  : req.body.gambar
    })
    .then(newItems => res.send(newItems))
    .catch(err => res.send(err))
  }

  static deleteItem (req,res) {
    Items.findOneAndRemove({_id: req.params.id})
    .then(rmvItem => res.send(rmvItem))
    .catch(err => res.send(err))
  }

  static updItem (req,res) {
    Items.findOneAndUpdate(req.params.id, {
      'nameItem': req.body.nameItem,
      'price'   : req.body.price,
      'qty'     : req.body.qty,
      'gambar'  : req.body.gambar
    })
    .then(updItem => res.send(updItem))
    .catch(err => res.send(err))
  }

  static getItemById (req,res) {
    Items.findOne(req.params.id)
    .then(itemId => res.send(itemId))
    .catch(err => res.send(err))
  }

}

module.exports = Item
