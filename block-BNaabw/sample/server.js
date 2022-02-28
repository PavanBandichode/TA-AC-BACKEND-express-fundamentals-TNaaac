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
app.use("/admin", (req, res, next) => {
  next("unauthoursed user");
});
app.get("/", (req, res) => {
  res.send("WELCOME TO EXPRESS");
});
app.get("/about", (req, res) => {
  res.send("WELCOME TO ABOUT PAGE");
});
app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//404 error
app.use((req, res, next) => {
  res.send("page not found");
});

//custom error
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(4000, () => {
  console.log("server is listening on port:4000");
});
