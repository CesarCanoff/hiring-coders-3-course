const http = require("http");

// CREATING VARIABLES.
const HOSTNAME = "127.0.0.1";
const PORT = 3000;

// Criando o servidor.
const server = http.createServer((request, response) => {
  response.statusCode = 200; // Status de retorno de sucesso.
  response.setHeader("Content-Type", "text/plain");
  response.end("Hello, World!"); // Renderizando a mensagem na tela.
});

// Servidor "ouvindo" na porta 3000.
server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
  // Nome do host e porta sendo carregados por variáveis [Template String]. 
});

