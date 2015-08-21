var staticServer = require('express').static;
var app = require('express')();
app.use(staticServer(__dirname + '/build'));
var redis = require('redis');
var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log('server listening on port: ' + port);
});
