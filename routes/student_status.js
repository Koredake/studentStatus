var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/student_status', function(req, res, next) {
  res.render('student_status');
});

module.exports = router;
