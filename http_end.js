var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end("\nResponse done\n");
}).listen(8081);
