const express = require("express");
const produtoController = require('../controllers/produtoController');
const routes = express.Router();

routes.get("/", (req, res) => {
  res.send("Olá Mundo!");
});

routes.get('/produto/lista', produtoController.listarProdutos);
routes.post("/produto", produtoController.cadastrarProduto)

/* PEGA ID/CATEGORIA DA URL.
routes.get("/produtos/:id?/:categoria", (req, res) => {
  console.log(req.params)
  res.send("Olá Mundo!");
});

routes.post("/cadastrar", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
*/
module.exports = routes;
