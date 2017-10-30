const express = require('express');

const responseTime = require('response-time');

const app = express();
const PORT = 8000;

app.use(responseTime());

app.use('/static', express.static('static'));
app.set('views', __dirname + '/views')

app.get('/second', (req, res) => {
  res.sendFile(__dirname + '/views/second-page.html');
});

app.get('/first', (req, res) => {
  res.sendFile(__dirname + '/views/first-page.html');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.use(function(req, res) {
  res.status(404).sendFile(__dirname + '/views/not-found-page.html');
});

app.listen(PORT, () => {
  console.log(`Second server is up and running at http://127.0.0.1:${PORT}/`);
});