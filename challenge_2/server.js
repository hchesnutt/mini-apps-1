const express = require('express');
const bodyParser = require('body-parser');
const handlers = require('./handlers.js')
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
});

app.post('/jsondata', handlers.JSONHandler)

app.use(express.static('client'))
let port = 3001;
app.listen(port, () => console.log('app listening on port:', port));