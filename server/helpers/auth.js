const jwt = require('jsonwebtoken')
require('dotenv').config()
const env = process.env.NODE_ENV

const isLogin = (req,res,next) => {
    jwt.verify(req.headers.token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            res.send(err)
        } else {
            req.headers = decoded
            console.log(req.headers);
            next()
        }
    })
}

const Admin = (req,res,next) => {
  if(req.headers.role === 'admin') {
    next()
  } else {
    res.send('KAMU BUKAN ADMIN')
  }
}

module.exports = {
  isLogin,
  Admin
}
