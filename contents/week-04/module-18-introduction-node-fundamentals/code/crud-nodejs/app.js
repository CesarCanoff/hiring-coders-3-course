const http = require('http');

const HOSTNAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello World!')
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at https://${HOSTNAME}:${PORT}/`)
})