'use strict';

var fs = require ('fs');
var uuid = require('uuid');
var path = require('path');

var dataFile = path.join(__dirname, '../data/posts.json')


exports.findAll = function(callback) {
// asynchronous
	fs.readFile(dataFile, (err, data) => {
		if(err) {
			callback(err);
			return;
		}
		try {
		var posts = JSON.parse(data);
		console.log(posts);	
		} catch(err){
			return callback(err);
		}
		callback(null, posts);
	});
};

//create post save to data.json
exports.create = function(post, cb) {
	this.findAll((err, posts) => {
		if(err) {
			return cb(err);
		}
		var newPost = {
			post: post.post,
			image: post.image,
			id: uuid()
		};
		console.log(newPost);
	posts.push(newPost);
	fs.writeFile(dataFile, JSON.stringify(posts), err => {
		cb(err);
	});
	});
}





