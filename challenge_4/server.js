const express = require('express');

const app = express();
const port = 3000;

app
  .use(express.static('public'))
  .listen(port, () => console.log(`Bowling App listening on port: ${port}`));