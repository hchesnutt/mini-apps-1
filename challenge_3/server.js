const Express = require('express');

const app = Express();
const port = 3000;

app
  .use(Express.static('public'))
  .use((req, res, next) => {
    console.log(`Received a ${req.method} request to ${req.url}`)
    next();
  })
  .listen(port, console.log(`Connect Four Server running on ${port}`));