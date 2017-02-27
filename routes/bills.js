var express = require('express');
var router = express.Router();
var sqlhelper = require("../common/sqlhelper");


router.get('/', function (req, res, next) {
	res.render('index', {
		title: 'Express'
	});
});

module.exports = router;