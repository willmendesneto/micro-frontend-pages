var http = require('http');

const PORT = 3000;

var server = http.createServer(function (request, response) {

  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write(`
    <h1>Second page</h1>
    <a href="/">Back to home page</a>
  `);  
  response.end();
});

server.listen(PORT);

console.log(`Second server is up and running at http://127.0.0.1:${PORT}/`);