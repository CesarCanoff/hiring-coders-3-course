# NodeJS

## Docs
- nodejs.org
- devdocs.io/node
- Stack Overflow

## Steps
~~~js
const http = require("http");
const url = require("url");
const queryString = require("query-string");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((request, response) => {
  let answer = "";
  const params = queryString.parse(url.parse(request.url, true).search);

  if (params.pergunta === "melhor-filme") {
    answer = "Interestelar";
  } else if (params.pergunta === "melhor-serie") {
    answer = "Dark";
  } else {
    answer = "Não sei";
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end(answer);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

~~~