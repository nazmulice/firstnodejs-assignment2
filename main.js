var fs = require("fs");
var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    let data = fs.readFileSync("home.html", "utf8");
    res.end(data);
  }
  else if (req.url == "/summer") {
    let data = fs.readFileSync("summer.html", "utf8");
    res.end(data);
  }
  else if (req.url == "/winter") {
    let data = fs.readFileSync("winter.html", "utf8");
    res.end(data);
  }
  
});
server.listen(8080);
console.log("Server Run Success");
