var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
const values=["shebin","Adhil","abhilash","fazil"]
const person={name:"shebin",admin:false}

  res.render('index', {person});

});

module.exports = router;
