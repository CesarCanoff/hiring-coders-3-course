var express = require('express');
var router = express.Router();
var cielo = require('../lib/cielo')

/* POST criação compra. */
router.post('/', function(req, res, next) {

  res.send(cielo.compra(req.body));
});

/* GET status de compra */
router.get('/:id_compra/status', function(req, res, next) {
  res.send('RUNNING STATS');
});

module.exports = router;

/**
 * ID - 1377ee0d-cfbc-4d3f-9105-38b527205986
 * KEY - RJGWKLEOXAHIIYKGQYFIKJZYLAMXPLJCRZAKFGYO
 */