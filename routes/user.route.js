var express = require('express');
var multer  = require('multer');
var router = express.Router();
var app = express();
var controller = require('../controllers/user.controllers');
var validates = require('../validates/users.validates');

var upload = multer({ dest: './public/uploads/' });




router.get('/', controller.users);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/:id', controller.user);

router.post('/create',upload.single('avatar'),
			validates.postCreate,
			controller.postCreate);

module.exports = router;
