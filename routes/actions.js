var express = require('express');
var router = express.Router();
var knex = require('../db');

/* GET actions listing. */
router.get('/', function(req, res, next) {
  res.send(knex.select().table('actions'));
});

/* GET a specific action listing. */
router.get('/:actionId', function(req, res, next) {
  res.send(knex.select().table('actions').where({id:req.params.actionId}).first());
});

module.exports = router;
