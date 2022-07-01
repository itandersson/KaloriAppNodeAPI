'use strict';
var express = require('express');
var router = express.Router();

/* GET food listing. */
router.get('/', function (req, res) {
    res.send('Test Food!');
});

module.exports = router;
