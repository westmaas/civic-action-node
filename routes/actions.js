var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET actions listing. */
router.get('/', function(req, res, next) {
  res.send(db.select().table('actions'));
});

/* GET a specific action listing. */
router.get('/:actionId', function(req, res, next) {
  res.send(db.select().table('actions').where({id:req.params.actionId}));
});

module.exports = router;
