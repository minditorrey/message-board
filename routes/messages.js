'use strict';

var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/', (req, res) => {
	Post.findAll(function(err, posts) {
	console.log(err)
	if(err) return res.status(400).send(err);

	res.render('messages');	
	})
	
});

router.post('/', (req, res) => {
	Post.create(req.body, err => {
		res.send(posts);
	});
});


module.exports = router;