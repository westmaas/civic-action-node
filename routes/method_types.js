var express = require('express');
var router = express.Router();
var knex = require('../db');

/* GET method_types listing. */
router.get('/', function(req, res, next) {
  res.send(knex.select().table('method_types'));
});

function find(p, res) {
  p.then(function (item){
    if(item) {
        res.send(item);
      } else {
        res.status(404);
        res.send("Item not found");
      }});
};

/* GET a method_types action listing. */
router.get('/:methodTypeId', function(req, res, next) {
  find(knex.first().table('method_types').where({id:req.params.methodTypeId}),res); 
});

module.exports = router;
