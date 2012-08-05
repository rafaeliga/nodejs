var express = require('express');

var app = express();

app.get('/', function(request, response) {
  response.sendfile(__dirname + '/');
});

app.listen(8081);
