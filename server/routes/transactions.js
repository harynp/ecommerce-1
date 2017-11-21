var express = require('express')
var router = express.Router()
var transactionController = require('../controllers/transactionCtrl')

router.get('/', transactionController.findAllTransaction)
router.post('/', transactionController.submitCart)
router.delete('/:id', transactionController.deleteTransaction)
router.delete('', transactionController.deleteAll)
module.exports = router
