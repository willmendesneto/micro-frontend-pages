
const express = require('express');

const app = express();

app.set('views', __dirname + '/views')

app.get('/not-found', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT, () => {
  console.log(`Not found server is up and running at http://127.0.0.1:${process.env.PORT}/`);
});
