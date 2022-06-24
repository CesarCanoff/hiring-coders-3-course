var express = require("express");
var router = express.Router();
var cielo = require("../lib/cielo");

/* POST criação compra. */
router.post("/", function (req, res, next) {
  cielo.compra(req.body).then((result) => {
    // res.send(result);
    cielo.captura(result.Payment.PaymentId).then((result) => {
      if (result.Status == 2) {
        res.statusCode(200).send({
          'Status': 'Success',
          'Message': 'Compra realizada com sucesso.'
        });
      } else {
        res.statusCode(402).send({
          'Status': 'Failed',
          'Message': 'Compra não realizada.'
        });
      }
    });
  });
});

/* GET status de compra */
router.get("/:id_compra/status", function (req, res, next) {
  res.send("RUNNING STATS");
});

module.exports = router;

/**
 * ID - 1377ee0d-cfbc-4d3f-9105-38b527205986
 * KEY - RJGWKLEOXAHIIYKGQYFIKJZYLAMXPLJCRZAKFGYO
 */
