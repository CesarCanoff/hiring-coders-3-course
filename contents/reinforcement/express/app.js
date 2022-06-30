const express = require("express");
const app = express();

app.get('/', (req, res) => {
  res.send('Olá Mundo!');
})

app.listen("3000", () => console.log(`It's running`));
