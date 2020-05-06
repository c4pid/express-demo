var Product = require('../../models/product.model');

module.exports.products = async function(req, res){

var products = await Product.find();
	res.json(products);
};

module.exports.create = async function(req, res){
	var product = await Product.create(req.body);
	res.json(product);
};

module.exports.update = async function(req,res){
	var product = await Product.findById(req.params.id);
	product.set(req.body);
	var result = await product.save();
	res.json(product);
};

module.exports.delete = async function(req,res){
	var product = await Product.deleteOne({_id: req.params.id});
	res.json(product);
};