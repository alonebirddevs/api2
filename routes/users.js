var express = require('express'),
user = require('../controllers/userController'),
router = express.Router();

// Add headers
router.use(function (req, res, next) {

	// Website you wish to allow to connect
	res.setHeader('Access-Control-Allow-Origin','*');

	// Request methods you wish to allow
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

	// Request headers you wish to allow
	res.setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,content-type,Accept, Authorization');

	// Set to true if you need the website to include cookies in the requests sent
	// to the API (e.g. in case you use sessions)
	res.setHeader('Access-Control-Allow-Credentials', true);

	// Pass to next layer of middleware
	next();
});


router.get('/', function(req, res) {
	console.log("Im Here To Fuck asss");
	user.getUserById(req.params.id, function (err, data) {
	   res.send(data);
	});
});

router.post('/auth/login', function(req, res) {
	res.send({status:'success',data:{}});
	// user.getUserById(req, function(err, data) {
	// 	res.send(data);
	// });
});

router.put('/', function(req, res) {
	user.getUserById(req, function(err, data) {
		res.send(data);
	});
});

router.delete('/', function(req, res) {
	user.getUserById(req, function(err, data) {
		res.send(data);
	});
});

module.exports = router;
