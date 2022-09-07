import jwt from "jsonwebtoken";
import { SECRET, DATE } from "../../config/auth";

// Node.js modules
import { promisify } from "util";

export default async (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders)
    return res.status(401).json({
      message: "Para acessar este serviço é necessário estar logado.",
    });

  const [, token] = authHeaders.split(" ");

  try {
    const decoded = await promisify(jwt.verify)(token, SECRET, {
      expiresIn: DATE,
    });
    req.userId = decoded.id;

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Token inválido.",
    });
  }
};
