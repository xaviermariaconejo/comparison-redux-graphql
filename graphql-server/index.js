const express = require("express");

const app = express();

const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/health", (req, res) => res.send("I'm alive!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
