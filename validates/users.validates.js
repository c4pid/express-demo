module.exports.postCreate = function(req, res, next){
var errors = []
	if(!req.body.name){
		errors.push('name is required');
	}
	if(!req.body.phone){
		errors.push('phone is required');
	}

	if(errors.length){
		console.log(errors);
		res.render('create', {
			errors: errors,
			values: req.body
		});
		return;
	}
	next();
};
