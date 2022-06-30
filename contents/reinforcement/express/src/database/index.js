const Sequelize = require("sequelize");

const DB_NAME = "loja";
const DB_USER = "root";
const DB_PASS = "My@ATOM06";
const DB_CONFIG = {
  dialect: "mysql",
  host: "localhost",
  port: "3306",
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
  console.error("Erro ao conectar.");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("BD Conectado.");
  } catch (error) {
    console.error("Erro ao conectar 2.");
  }
}

Object.assign(db, {
  hasConnection,
});

module.exports = db;
