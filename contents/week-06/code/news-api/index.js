// Importando o Express.
const express = require("express");

// Instanciando o Express como App.
const app = express();

// Número de porta.
const port = "3000";

// Rota principal - (index).
app.get("/", (request, response) => {
  response.send("Hello, World!");
});

// Servidor rodando.
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
