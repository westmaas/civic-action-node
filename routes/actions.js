var express = require('express');
var router = express.Router();
var knex = require('../db');

/* GET actions listing. */
router.get('/', function(req, res, next) {
  res.send(knex.select().table('actions'));
});

function findAction(p, res) {
  p.then(function (action){
    if(action) {
        res.send(action);
      } else {
        res.sendStatus(404);
        res.send("Action not found");
      }});
};

/* GET a specific action listing. */
router.get('/:actionId', function(req, res, next) {
  findAction(knex.first().table('actions').where({id:req.params.actionId}),res); 
});

module.exports = router;
