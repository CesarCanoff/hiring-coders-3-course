// Todos os arquivos e bibliotecas devem ser importados aqui.
import { createServer, IncomingMessage, ServerResponse } from "http";
import { parse } from "query-string";
import * as url from "url";
import { writeFile } from "fs";

// Definindo a porta do servidor.
const PORT = 5000;

/*
  Se a importação for `import * as http from 'http'`,
  é preciso adicionar o http na criação do servidor: const server = http.createServer((req, res) => {
*/

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  /*
   * IncomingMessage é um objeto que representa a requisição recebida pelo servidor.
   * ServerResponse é um objeto que representa a resposta que o servidor vai enviar.
   */

  // Obtendo o caminho da requisição mesmo que esteja vazio.
  const urlParse = url.parse(req.url || "", true);

  // Obtendo o caminho da requisição mesmo que esteja vazio, com o if ternário.
  const params = parse(urlParse.search ? urlParse.search : "");

  if (urlParse.pathname === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Home");
    res.end();
  } else if (urlParse.pathname === "/create-update-user") {
    // Salvar usuário.
    writeFile(`users/${params.id}.txt`, JSON.stringify(params), (err: any) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/html" });
        res.write("Erro ao salvar usuário.");
        res.end();
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Usuario salvo com sucesso.");
        res.end();
      }
    });
  }
});

// Iniciando o servidor.
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
