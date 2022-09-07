const { randomBytes } = require("crypto");

/***
 * * You can use this script to generate a secret for your JWT Authentication Token.
 * *
 * * 1. Open your terminal in the project root folder and type the command below:
 * * node ./helpers/genkey.js
 * *
 ****/

const generatedSecret = randomBytes(32).toString("hex");
console.log(`\nYour Secret Key: ${generatedSecret}\n`);
