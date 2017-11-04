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

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));



consign()
  .include('./app/routes')
  .then('./app/controllers')
  .into(app);

  module.exports = { app };