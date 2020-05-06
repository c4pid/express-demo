var Product = require('../models/product.model');

module.exports.products =  function(req, res){
	// var page = parseInt(req.query.page) || 1;//n
	// var perPage = 6;//x
	// var begin = (page-1) * perPage;
	// var end = page * perPage;
	// res.render('products',{
	// 	products: db.get('products').value().slice(begin,end)
	// });
	Product.find().then(function(products){
		res.render('products',{
			products: products
		});
	});
}