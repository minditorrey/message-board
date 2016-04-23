'use strict';

var express = require('express');
var router = express.Router();


var Post = require('../models/post');

router.get('/', (req, res) => {
		Post.findAll((err, posts) => {
			if(err) {
				return res.status(400).send(err);
			}
		res.send(posts)
	})
})
router.post('/', (req, res, next) => {
	console.log("Hit Route")
	console.log("REQUEST BODDY", req.body)
	Post.create(req.body, (err, post) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(post)
		}
	});
});

module.exports = router;
