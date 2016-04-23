'use strict';

const PORT = process.env.PORT || 3000;

var jade = require('jade');
var nodeStatic = require('node-static');
var moment = require('moment');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var dateNow = moment().format("MMMM Do YYYY, h:mm:ss a");

// var Post = require('./models/post');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'jade');

app.use(express.static('./public'));

app.use('/', require('./routes/api'))

app.get('/', (req, res) => {
  res.send('GET /');
});

app.listen(PORT, err => {
	console.log(err || `Server listening on port ${PORT}` );
});
