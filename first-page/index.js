
const express = require('express');

const app = express();
const PORT = 4000;

app.set('views', __dirname + '/views')

app.get('/first', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`First server is up and running at http://127.0.0.1:${PORT}/`);
});