var express = require('express');
var router = express.Router();
var knex = require('../db');

/* GET actions listing. */
router.get('/', function(req, res, next) {
  res.send(knex.select().table('actions'));
});

function find(p, res) {
  p.then(function (item){
    if(item) {
        res.send(item);
      } else {
        res.status(404);
        res.send("item not found");
      }});
};

/* GET a specific action listing. */
router.get('/:actionId', function(req, res, next) {
  find(knex.first().table('actions').where({id:req.params.actionId}),res); 
});

/* GET a specific action's methods listing. */
router.get('/:actionId/methods', function(req, res, next) {
  find(knex.select().table('methods').where({action_id:req.params.actionId}),res); 
});


module.exports = router;
