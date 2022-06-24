// Importando o Express.
const express = require("express");

// Importando o MySQL.
var mysql = require("mysql2");

// Instanciando o Express como App.
const app = express();

// Número de porta.
const port = "3000";

// Criando a conexão
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "My@ATOM06",
});

connection.connect();

// Rota principal - (index).
app.get("/", (request, response) => {
  response.send("Hello, World!");
});

app.get("/news-api/v1/categorias", (request, response) => {
  connection.query(
    "SELECT id, nome FROM sistema_noticias.categoria",
    function (err, rows, fields) {
      if (err) throw err;

      response.send(rows);
    }
  );
  connection.end();
});

// Serviço de busca de notícias.
app.get(
  "/news-api/v1/categorias/:categoriaId/noticias",
  (request, response) => {
    connection.query(
      'SELECT id, titulo FROM sistema_noticias.noticia WHERE id_categoria = ' + request.params.categoriaId,
      function (err, rows, fields) {
        if (err) throw err;

        response.send(rows);
      }
    );
  }
);

// Servidor rodando.
app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
