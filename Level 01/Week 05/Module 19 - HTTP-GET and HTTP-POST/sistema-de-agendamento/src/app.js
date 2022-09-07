import express from "express";
import routes from "./routes";
import { resolve } from "path";

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    // Remove this static path later
    this.server.use(
      "/files",
      express.static(resolve(__dirname, "..", "tmp", "uploads"))
    );
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
