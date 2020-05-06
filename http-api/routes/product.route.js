var express = require('express');
var router = express.Router();
var app = express();
var productController = require('../controllers/product.controller');

router.get('/', productController.products);
router.post('/', productController.create);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);
module.exports = router;