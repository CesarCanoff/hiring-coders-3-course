import { createServer } from "http";

const server = createServer((request, response) => {
  switch (request.url) {
    case "/status": {
      response.writeHead(200, {
        "Content-Type": "application/json",
      });
      response.write(
        JSON.stringify({
          status: "OK",
        })
      );
      response.end();
      break;
    }
    default: {
      response.writeHead(404, "Service not found!");
      response.end();
    }
  }
});

const PORT = process.env.PORT ? parseInt(process.env.PORT) : "3000";
const HOSTNAME = process.env.HOSTNAME || "127.0.0.1";

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running at http://${HOSTNAME}:${PORT}`);
});
