import "dotenv/config";

const HOST = process.env.POSTGRES_HOST;
const USERNAME = process.env.POSTGRES_USERNAME;
const PASSWORD = process.env.POSTGRES_PASSWORD;
const DBNAME = process.env.POSTGRES_DBNAME;

export default {
  dialect: "postgres",
  host: HOST,
  username: USERNAME,
  password: PASSWORD,
  database: DBNAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
