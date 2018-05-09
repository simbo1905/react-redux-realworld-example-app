const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const WINDOW_ENV = "window.env={'API_ROOT':'"+process.env.API_ROOT+"'}\n";

console.log('WINDOW_ENV:'+WINDOW_ENV);

app.get('/env.js', function (req, res) {
  res.setHeader("Cache-Control", "public, max-age=300");
  res.set('Content-Type', 'application/javascript');
  console.log('WINDOW_ENV:'+WINDOW_ENV);
  res.send(WINDOW_ENV);
});

app.get('/commit', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.send(process.env.OPENSHIFT_BUILD_COMMIT);
});

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT);
