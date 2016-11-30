var express = require('express');
var router = express.Router();

/* GET actions listing. */
router.get('/', function(req, res, next) {
  res.send('list all actions');
});

/* GET a specific action listing. */
router.get('/:actionId', function(req, res, next) {
  res.send(req.params.actionId);
});

module.exports = router;
