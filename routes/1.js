var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/1', function(req, res, next) {
  res.render('1', { title: 'What is Flexbox?' });
});

module.exports = router;