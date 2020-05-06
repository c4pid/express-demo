var express = require('express');
var router = express.Router();
var app = express();
var productController = require('../controllers/product.controller');

router.get('/', productController.products);


module.exports = router;