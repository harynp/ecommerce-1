var express = require('express')
var router = express.Router()
var itemController = require('../controllers/itemCtrl')

router.get('/', itemController.getItem)
router.post('/', itemController.postItem)
router.delete('/:id', itemController.deleteItem)
router.put('/:id', itemController.updItem)
router.get('/:id', itemController.getItemById)

module.exports = router
