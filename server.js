const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");

    next();
});

const WINDOW_ENV = "window.env={'API_ROOT':'"+process.env.API_ROOT+"'}\n";

app.get('/env.js', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=300");
  res.set('Content-Type', 'application/javascript');
  res.send(WINDOW_ENV);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT);
