// Server

const express = require("express");
const next = require("next");
const port = 4000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handler = app.getRequestHandler();

app.prepare()
  .then( () => {
    const server = express();

    server.get('/launches', (req, res) => {
      return app.render(req, res, '/launches');
    })

    server.get('/rockets', (req, res) => {
      return app.render(req, res, '/rockets');
    })

    server.get('*', (req, res) => {
      return handler(req, res);
    })

    server.listen(port, (err)=> {
      if(err) throw err;
      console.log(`Ready on http://localhost:${port}`);
    })
  })

