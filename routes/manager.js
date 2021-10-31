var express = require('express');
var router = express.Router();
var web3 = require("../web3")

/* GET users listing. */
router.get('/manager', function(req, res, next) {
    res.render("admin")
});

module.exports = router;
