import "dotenv/config";

const SECRET = process.env.JWT_SECRET;
const DATE = process.env.JWT_EXPIRES_DATE;

// JWT config object
export { SECRET, DATE };
