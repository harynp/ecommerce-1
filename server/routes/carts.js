const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartCtrl')

router.get('/', cartController.getAllCart)
router.post('/', cartController.addToCart)
router.delete('/:id', cartController.deleteCart)
router.delete('/', cartController.deleteAll)
module.exports = router
