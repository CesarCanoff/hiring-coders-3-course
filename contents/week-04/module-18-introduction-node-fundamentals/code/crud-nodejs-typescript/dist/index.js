"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Todos os arquivos e bibliotecas devem ser importados aqui.
const http_1 = require("http");
const query_string_1 = require("query-string");
const url = __importStar(require("url"));
const fs_1 = require("fs");
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
    // Obtendo o caminho da requisição mesmo que esteja vazio.
    const urlParse = url.parse(req.url || "", true);
    // Obtendo o caminho da requisição mesmo que esteja vazio, com o if ternário.
    const params = (0, query_string_1.parse)(urlParse.search ? urlParse.search : "");
    if (urlParse.pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("Home");
        res.end();
    }
    else if (urlParse.pathname === "/create-update-user") {
        // Salvar usuário.
        (0, fs_1.writeFile)(`users/${params.id}.txt`, JSON.stringify(params), (err) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/html" });
                res.write("Erro ao salvar usuário.");
                res.end();
            }
            else {
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
