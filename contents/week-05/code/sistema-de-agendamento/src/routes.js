import { Router } from "express";

const routes = new Router();

// Rota para a página inicial.
routes.get("/", (req, res) => {
  return res.json({ message: "Okay" });
});

export default routes;
