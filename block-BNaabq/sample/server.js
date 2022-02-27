var express = require("express");
var logger = require("morgan");
var cookieParser = require("cookie-parser");
var app = express();

app.use(logger("dev"));
app.use(cookieParser());
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
  res.send("welcome after middleware express server");
});

app.listen(4000, () => {
  console.log("server is listening on port:4000");
});
