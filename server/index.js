const express = require("express");
const bodyParser = require("body-parser");
const pino = require("express-pino-logger")();
const fetch = require("node-fetch");
const movieDbApi = require("../api/movieDbApi.js");

const app = express();
app.use(bodyParser.json());
app.use(pino);

app.get("/api/movies/popular", (req, res) => {
  const url = movieDbApi.movies.getPopular();
  fetch(url)
    .then(res => res.json())
    .then(json => {
      res.setHeader("Content-Type", "application/json");
      res.send(json);
    })
    .catch(err => res.sendStatus(500));
});

app.get("/api/movies/search", (req, res) => {
  const query = req.query.query || " ";
  const url = movieDbApi.movies.search(query);

  fetch(url)
    .then(res => res.json())
    .then(json => {
      res.setHeader("Content-Type", "application/json");
      res.send(json);
    })
    .catch(err => res.sendStatus(500));
});

app.get("/api/movies/:id", (req, res) => {
  const url = movieDbApi.movies.getOne(req.params.id);

  fetch(url)
    .then(res => res.json())
    .then(json => {
      res.setHeader("Content-Type", "application/json");
      res.send(json);
    })
    .catch(err => res.sendStatus(500));
});

const port = process.env.PROXY_SERVER_PORT || 3001;
app.listen(port, () =>
  console.log(`Express server is running on localhost:${port}`)
);
