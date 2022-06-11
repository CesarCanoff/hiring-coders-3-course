const { Router } = require("express");

const routes = new Router();

// Rota para a página inicial.
routes.get("/", (req, res) => {
  return res.json({ message: "Okay" });
});

module.exports = routes;
