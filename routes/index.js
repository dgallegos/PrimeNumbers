var express = require('express');
var router = express.Router();
var PrimeNumbers = require('../models/prime_numbers');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('static/index');
});

/* GET PrimeNumbers API */
router.get('/prime_numbers.json', function(req, res, next) {
  if(isNaN(req.query.generate)) {
    res.json([]);
  }
  else {
    res.json(PrimeNumbers.generatePrimes(req.query.generate));
  }
});

module.exports = router;
