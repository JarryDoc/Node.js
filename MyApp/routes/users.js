var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var serveIndex = require('serve-index');
var serveStatic = require('serve-static');
router.use('/', serveIndex("D:/temp", {"icons": true}));
router.use('/', serveStatic("D:/temp"));


module.exports = router;
