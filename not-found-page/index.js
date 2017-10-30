
const express = require('express');
const responseTime = require('response-time');

const app = express();

app.use(responseTime());

app.set('views', __dirname + '/views');

app.get('/not-found', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(process.env.PORT, () => {
  console.log(`Not found server is up and running at http://127.0.0.1:${process.env.PORT}/`);
});
