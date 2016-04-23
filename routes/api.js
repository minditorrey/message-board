'use strict';
var express = require('express');
var router = express.Router();

//               url      file
router.use('/', require('./index'));
router.use('/messages', require('./messages'));
router.use('/posts', require('./posts'));

module.exports = router;