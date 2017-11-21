const CartsModel = require('../models/cartModel')

class Carts {

  static getAllCart(req,res) {
    CartsModel.find()
    .then(data => res.send(data))
    .catch(err => res.send(err))
  }

  static addToCart (req,res) {
    CartsModel.create({
      nameItem: req.body.namaItem,
      price: req.body.price,
      gambar: req.body.gambar
    })
    .then(newCart => res.send(newCart))
    .catch(err => res.send(err))
  }

  static deleteCart (req,res) {
    CartsModel.remove({_id: req.params.id})
    .then(delCart => res.send(delCart))
    .catch(err => res.send(err))
  }

  static deleteAll (req,res) {
    CartsModel.remove()
    .then(delAll => res.send(delAll))
    .catch(err => res.send(err))
  }
}

module.exports = Carts
