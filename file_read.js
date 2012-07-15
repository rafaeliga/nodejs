var fs = require('fs');

fs.readFile('index.html', function(err, contents) {
  console.log(contents);
})

console.log('ready?');