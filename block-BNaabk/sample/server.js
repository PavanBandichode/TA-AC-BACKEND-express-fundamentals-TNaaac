var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("welcome to express server");
});

app.listen(3001, () => {
  console.log("server is listening on port:3001");
});
