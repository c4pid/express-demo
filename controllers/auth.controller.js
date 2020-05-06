var md5 = require('md5');
var db = require('../db');

module.exports.login = function(req, res){
	res.render('login');
};

module.exports.postLogin = function(req, res){
	var email = req.body.email;
	var password = req.body.password;
	var user = db.get('users').find({email: email}).value();
	if(!user){
		res.render('login', {
			errors: [
			'User is not exist.'
			],
			values: req.body
		});
		return;
	}

	var hashPassword = md5(password);

	if(user.password !== hashPassword){
		res.render('login', {
			errors: [
			'password is incorrect.'
			],
			values: req.body
		});
		return;
	}
	res.cookie('id', user.id, {
		signed: true
	});
	res.redirect('/users');
};

