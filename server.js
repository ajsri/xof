var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config.js");
var compiler = webpack(config);

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpackHotMiddleware = require("webpack-hot-middleware");

var bodyParser = require("body-parser");

var app = express();

//TODO: implement mongoose instead of native Mongo.Client
// const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/xof");

const mongoUrl = "mongodb://localhost:27017/xof";
const mongo = require("mongodb");
const mongoClient = require("mongodb").MongoClient;

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

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/test", function (req, res) {
  var name = req.body.name
  res.json({
    response: name + ", I can't believe you took orders from a button..."
  })
})

app.get("/users", function(req, res) {
  mongoClient.connect(mongoUrl, function(err, db) {
    if(err){
      throw err;
    }
    else{
      var users = db.collection("users").find().toArray(function(err, docs) {
        res.send(docs);
        db.close()
      });
    }
  })
})
app.get("/members", function(req, res) {
  mongoClient.connect(mongoUrl, function(err, db) {
    if(err){
      throw err;
    }
    else{
      var users = db.collection("members").find().toArray(function(err, docs) {
        res.json(docs);
        db.close();
      });
    }
  })
})

app.get("/members/:id", function(req, res) {
  mongoClient.connect(mongoUrl, function(err, db){
    if(err){
      throw err;
    }
    else{
      var id = new mongo.ObjectId(req.params.id);
      var user = db.collection("members").findOne({"_id": id}, function(err, user){
        res.json(user);
        db.close();
      });
    }
  })
})
app.post("/users", function(req, res) {
  if(!req.body.name){
    res.json({
      error: "no name defined"
    })
  }
  else{
    mongoClient.connect(mongoUrl, function(err, db) {
      if(err) {
        throw err;
      }
      else{
        db.collection("users").insert({name: req.body.name}, function(err, docs) {
          res.json({
            message: "user " + req.body.name + " successfully added"
          })
        })
      }
    })
  }
})

app.listen(3788, function() {
  console.log("listening on 3788")
})