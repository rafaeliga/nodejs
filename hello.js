var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write('Hello, this is Rafael');
  response.end();
}).listen(8081);

