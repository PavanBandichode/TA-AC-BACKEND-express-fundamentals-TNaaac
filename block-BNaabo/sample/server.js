var express = require("express");

var app = express();
function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.send("welcome after middleware express server");
});
app.post("/json", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
app.post("/contact", (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
app.listen(4000, () => {
  console.log("server is listening on port:4000");
});
