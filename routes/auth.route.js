var express = require('express');
var router = express.Router();
var app = express();
var authController = require('../controllers/auth.controller');

router.get('/', authController.login);
router.post('/', authController.postLogin);
module.exports = router;