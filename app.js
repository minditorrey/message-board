'use strict';

const PORT = process.env.PORT || 3000;

var jade = require('jade');
var nodeStatic = require('node-static');
var moment = require('moment');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var dateNow = moment().format("MMMM Do YYYY, h:mm:ss a");

var Post = require('./models/post');


app.use(express.static('./public'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.route('/')
	.get((req, res, next) => {

		res.render('index', {
			title: 'Message Board App'
		});


		});
	

app.route('/messages')
	.get((req, res, next) => {
		res.render('messages', {
			title: 'Messages',
			// messages: post,
		
		});	
	});
app.route('/msgs')
	.get((req, res, next) => {
		Post.findAll((err, posts) => {
			if(err) {
				return res.status(400).send(err);
			}
		res.send(posts)
	})
})
	.post((req, res, next) => {
		console.log(req.body)
		Post.create(req.body, err => {
			if(err) {
				console
				res.status(400).send(err);
			} else {
				res.send()
			}
		});
	});


app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}` );
});
