var db = require('../db');
var shortid = require('shortid');

module.exports.users = function(req, res){
	res.render('users',{
		users: db.get('users').value()
	});
};

module.exports.search = function(req, res){
	var name = req.query.name;
	var result = db.get('users').value().filter(function(user){
		return user.name.indexOf(name) !== -1;
	});

		res.render('users', {
		users: result
	});
};

module.exports.create = function(req, res){
	res.render('create');
};

module.exports.user = function(req, res){
	var id = req.params.id;
	var user = db.get('users').find({id: id}).value();
	if(id === 'OwuxCnkBG'){
		res.render('mypig',{
			user: user
		})
	}else
	res.render('in4',{
		user: user
		});
};

module.exports.postCreate = function(req, res){
	req.body.id = shortid.generate();
	req.body.avatar = req.file.path.split('/').slice(1).join('/');
	db.get('users').push(req.body).write();
	res.redirect('/users');
};

