var express = require("express");
var router = express.Router();
var cielo = require("../lib/cielo");

/* POST criação compra. */
router.post("/", function (req, res, next) {
  const paymentId = result.Payment.PaymentId;
  cielo.compra(req.body).then((result) => {
    cielo.captura(paymentId).then((result) => {
      if (result.Status == 2) {
        res.statusCode(200).send({
          Status: "Success",
          Message: "Compra realizada com sucesso.",
          CompraId: result.Payment.PaymentId,
        });
      } else {
        res.statusCode(402).send({
          Status: "Failed",
          Message: "Compra não realizada.",
        });
      }
    });
  });
});

/* GET status de compra */
router.get("/:compra_id/status", function (req, res, next) {
  cielo.consulta(req.params.compra_id).then((result) => {
    let message = {};
    switch (result.Payment.Status) {
      case 1:
        message = {
          Status: "Pagamento Autorizado",
        };
        break;
      case 2:
        message = {
          Status: "Pagamento Realizado",
        };
        break;
      case 12:
        message = {
          Status: "Pagamento Pendente",
        };
        break;
      default:
        message = {
          Status: "Pagamento Falhou",
        };
    }

    res.send(message);
  });
});

module.exports = router;

/**
 * ID - 1377ee0d-cfbc-4d3f-9105-38b527205986
 * KEY - RJGWKLEOXAHIIYKGQYFIKJZYLAMXPLJCRZAKFGYO
 */
