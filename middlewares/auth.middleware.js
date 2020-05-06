var db = require('../db');

module.exports.requireAuth = function(req, res, next){
	if(!req.signedCookies.id){
		res.redirect('/login');
		return;
	}

	var user = db.get('users').find({ 
		id: req.signedCookies.id 
	}).value();

	if(!user){
		res.redirect('/login');
		return;
	}
	res.locals.user = user;
	next();
};