var express = require("express");
var webpack = require("webpack");

var config = require("./webpack.config.js");
var compiler = webpack(config);

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
  state: { colors: true }
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log
}))

app.use(express.static("public"));

app.get("/*", function(req, res){
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/test", function(req, res){
  var name = req.body.name
  res.json({
    response: name + ", I can't believe you took orders from a button..."
  })
})

app.listen(3788, function(){
  console.log("listening on 3788");
})