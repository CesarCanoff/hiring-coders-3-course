const http = require("http");
const url = require("url");
const queryString = require("query-string");
const fs = require("fs");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;

const server = http.createServer((request, response) => {
  const urlParse = url.parse(request.url, true);
  const params = queryString.parse(urlParse.search);
  var responseHTML;

  if (urlParse.pathname === "/create-user") {
    fs.writeFile(
      `./users/${params.id}.txt`,
      `${JSON.stringify(params)}`,
      (error) => {
        if (error) throw error;

        response.statusCode = 201;
        response.setHeader("Content-Type", "text/plain");
        response.end(responseHTML);
      }
    );

    responseHTML = "User was saved successfully.";
  } else if (urlParse.pathname === "/search-user") {
    fs.readFile(`./users/${params.id}.txt`, (error, data) => {
      if (error) throw error;
      responseHTML = data;

      response.statusCode = 200;
      response.setHeader("Content-Type", "application/json");
      response.end(responseHTML);
    });
  }
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
