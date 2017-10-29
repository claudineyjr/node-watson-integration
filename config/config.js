var express = require('express');

var app = express();

var bodyParser = require('body-parser');

var consign = require('consign');

var watson = require('watson-developer-cloud');

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '1mb'
}));
app.use(bodyParser.json({
  limit: '1mb'
}));

consign()
  .include('./app/routes')
  .into(app);