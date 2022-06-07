const http = require("http");
const url = require("url");
const queryString = require("query-string");
const fs = require("fs");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((request, response) => {
  const params = queryString.parse(url.parse(request.url, true).search);
  let responseHTML;
  // let userName = params.name;
  // let idUser = params.id;

  fs.writeFile(
    `./users/${params.id}.txt`,
    `${JSON.stringify(params)}`,
    (error) => {
      if (error) throw error;
    }
  );

  responseHTML = "User was saved successfully.";

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");
  response.end(responseHTML);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});

/**
 * 1 - Create user;
 * 2 - Read/Select/Search user;
 * 3 - Update user;
 * 4 - Delete user;
 */
