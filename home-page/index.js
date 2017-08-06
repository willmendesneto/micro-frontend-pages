var http = require('http');

const PORT = 5000;

var server = http.createServer(function (request, response) {
  response.writeHeader(200, {"Content-Type": "text/html"});  
  response.write(`
    <h1>Home page</h1>
    <a href="/first">First page</a><br/>
    <a href="/second">Second page</a>
  `);  
  response.end();
});

server.listen(PORT);

console.log(`Home server is up and running at http://127.0.0.1:${PORT}/`);