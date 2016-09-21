var express = require("express");
var webpack = require("webpack");

var config = require("./webpack.config.js");
var compiler = webpack(config);

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var app = express();

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

app.listen(3788, function(){
  console.log("listening on 3788");
})