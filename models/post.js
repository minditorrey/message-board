'use strict';

var fs = require ('fs');
var uuid = require('uuid');
var path = require('path');
var db = require('../config/db')

//create post save to data.json
exports.create = function(post, cb) {
	db.serialize(function() {

	var stmt = db.prepare("INSERT INTO posts VALUES (?, ?, ?, ?)");
	stmt.run(post.name, post.post, post.image);
		stmt.finalize(function(err) {
			if(err) cb(err);
			cb(null, post);
		})
	})
}

db.run('CREATE TABLE IF NOT EXISTS posts (image text, name text, post text, date text, id text)');
exports.findAll = function(cb) {

	db.all('SELECT * FROM posts', function(err, posts) {

	cb(err, posts);	
	});
};


	





