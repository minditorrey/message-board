'use strict';

var express = require('express');
var router = express.Router();

router.get('/')
	.get((req, res, next) => {
		res.render('index', {
			title: 'Message Board App'
		});
		});



module.exports = router;