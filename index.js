var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var userRouter = require('./routes/user.route');
var authRouter = require('./routes/auth.route');
var productRouter = require('./routes/product.route');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express-demo');


var middlewares = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');
var cartRoute = require('./routes/cart.route');
var apiProductRoute = require('./http-api/routes/product.route');

app.use(cookieParser('jklfadsfjosapewhrewq'));
app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(sessionMiddleware);


app.use('/users',middlewares.requireAuth, userRouter);
app.use('/login', authRouter);
app.use('/products', productRouter);
app.use('/cart', cartRoute);
app.use('/api/products', apiProductRoute);
app.use(express.static('public'));


app.listen(9080, function(){
	console.log('Server listening on port 9080');
});


app.get('/', function(req, res){
	res.render('root');
});

