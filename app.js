var express = require('express');
var app = express.createServer();
var request = require('request');
var url = require('url');

app.get('/tweets/:username', function(req, response) {
  var username = req.params.username;

  options = {
    protocol: 'http',
    host: 'api.twitter.com',
    pathname: '/1/statuses/user_timeline.json',
    query: { screen_name: username, count: 10 }
  }

  var twitterUrl = url.format(options);
  // request(twitterUrl).pipe(response);

  request(twitterUrl, function(err, res, body) {
    var tweets = JSON.parse(body);
    response.render('tweets.ejs', {tweets: tweets, name: username});
  });
});


app.listen(8081);
