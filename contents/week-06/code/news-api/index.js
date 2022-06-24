// Importando o Express.
const express = require("express");

// Importando o MySQL.
const mysql = require('mysql2');

// Criando a conexão
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'My@ATOM06'
});

connection.connect();

// Instanciando o Express como App.
const app = express();

// Número de porta.
const port = "3000";

// Rota principal - (index).
app.get("/", (request, response) => {
  response.send("Hello, World!");
});

app.get("/news-api/v1/categorias", (request, response) => {

  response.send(categorias)
})

// Servidor rodando.
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
