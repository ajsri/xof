import express from "express"
import webpack from "webpack"

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

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/test", (req, res) => {
  let name = req.body.name
  res.json({
    response: name + ", I can't believe you took orders from a button..."
  })
})

app.get("/users", (req, res) => {
  mongoClient.connect(mongoUrl, (err, db) => {
    if(err){
      throw err;
    }
    else{
      let users = db.collection("users").find().toArray((err, docs) => {
        res.send(docs);
        db.close()
      });
    }
  })
})

app.post("/users", (req, res) => {
  if(!req.body.name){
    res.json({
      error: "no name defined"
    })
  }
  else{
    mongoClient.connect(mongoUrl, (err, db) => {
      if(err) {
        throw err;
      }
      else{
        db.collection("users").insert({name: req.body.name}, (err, docs) => {
          res.json({
            message: "user " + req.body.name + " successfully added"
          })
        })
      }
    })
  }
})

app.listen(3788, () => {
  console.log("listening on 3788")
})