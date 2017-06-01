// Importing express module of npm
var express = require('express');

// Importing consign module of npm - This is for autoinclude JS files on especific folder
var consign = require('consign');

// Importing body-parser
var bodyParser = require('body-parser');

// Calling module/function of express
var app = express();

// Adding middleware body-parser for use in post request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Including folder routes, models and file dbConnection to consign and adding in app var
consign()
    .include('routes')
    .into(app);

// Exporting var app
module.exports = app;
