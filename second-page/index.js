const express = require('express');

const app = express();
const PORT = 3000;

app.set('views', __dirname + '/views')

app.get('/second', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(PORT, () => {
  console.log(`Second server is up and running at http://127.0.0.1:${PORT}/`);
});