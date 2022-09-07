import mongoose from "mongoose";
import "dotenv/config";

const URI = process.env.MONGODB_URI;
const DBNAME = process.env.MONGODB_DBNAME;

mongoose.connect(
  URI,
  {
    dbName: DBNAME,
  },
  (err) => {
    if (err) throw err;
    console.log("\nConnected to MongoDB.\n");
  }
);
