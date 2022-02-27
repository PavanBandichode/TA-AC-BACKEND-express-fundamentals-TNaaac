var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use((req, res, next) => {
  console.log(req.cookies);
  let count = req.cookies.count;
  if (count) {
    res.cookie("count", Number(count) + 1);
  } else {
    res.cookie("count", 1);
  }
  next();
});
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
app.get("/new", (req, res) => {
  res.sendFile(__dirname + "/new.html");
});
app.post("/new", (req, res) => {
  res.send(req.body);
});

app.get("/users/:username", (req, res) => {
  let username = req.params.username;
  res.send(username);
});
app.listen(4000, () => {
  console.log("server is listening on port:4000");
});
