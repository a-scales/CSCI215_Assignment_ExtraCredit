var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ExtraCredit - CSCI215' });
});

router.get('/ajax', function(req,res,next) {
  res.send('Ajax is working!');
})

module.exports = router;
