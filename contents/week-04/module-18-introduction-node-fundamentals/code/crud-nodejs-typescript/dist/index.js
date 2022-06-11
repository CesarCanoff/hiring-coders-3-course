"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Todos os arquivos e bibliotecas devem ser importados aqui.
const http_1 = require("http");
// Definindo a porta do servidor.
const PORT = 5000;
/*
  Se a importação for `import * as http from 'http'`,
  é preciso adicionar o http na criação do servidor: const server = http.createServer((req, res) => {
*/
const server = (0, http_1.createServer)((req, res) => {
    /*
     * IncomingMessage é um objeto que representa a requisição recebida pelo servidor.
     * ServerResponse é um objeto que representa a resposta que o servidor vai enviar.
     */
});
// Iniciando o servidor.
server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
