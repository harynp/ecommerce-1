var Model = require('../models/user')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
require('dotenv').config()
class User {
  static findAll (req,res) {
    Model.find()
    .then(findUser => res.send(findUser))
    .catch(err => console.error(err))
  }

  static addUser (req,res) {
    Model.create({
      username: req.body.username,
      password: req.body.password,
      role    : req.body.role
    })
    .then(addUser => res.send(addUser))
    .catch(err => console.error(err))
  }

  static rmvUser (req,res) {
    Model.remove({_id: req.params.id})
    .then(rmvUser => res.send(rmvUser))
    .catch(err => console.log(err))
  }

  static login (req,res) {
    Model.findOne({username: req.body.username})
    .then(data => {
      var passwordIsValid = bcrypt.compareSync(req.body.password, data.password);
      if (passwordIsValid) {
        let token = jwt.sign({username: data.username, id: data._id, role: data.role, date: data.date}, process.env.JWT_SECRET);
        res.send(token)
      } else {
        console.log('GAGAL LOGIN');
      }
    })
    .catch(err => console.error(err))
  }

}

module.exports = User
