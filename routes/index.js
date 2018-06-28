var express = require('express');
var router = express.Router();
var chartmodel = require('../model/chartmodel');

/* GET home page. */

router.get('/', function(req, res, next){
  res.render('index');
});


router.get('/getdata', function(req, res, next) {
chartmodel.listChart(function(err, result){
  if (err) {
    console.log('here is err');    
  }
  else {
  res.send(result);
  }
});


});

module.exports = router;
