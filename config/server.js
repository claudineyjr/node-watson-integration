var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var consign = require('consign');

var Twit = require('twit');

var watson = require('watson-developer-cloud');

var twitterAccess = require('./twitter-access');

var watsonAccess = require('./watson-access');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '1mb'
}));
app.use(bodyParser.json({
  limit: '1mb'
}));

app.set('view engine', 'ejs');
app.set('views', './app/views');



consign()
  .include('./app/routes')
  .into(app);

  module.exports = { app, Twit, watson, twitterAccess, watsonAccess };