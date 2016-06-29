var express = require('express');
var app = express();
var port = process.env.PORT || 3001;

var morgan = require('morgan');
app.use(morgan('dev'));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(bodyParser.json());

// routes
require('./routes/index.js')(app);

var server = require('http').createServer(app);
server.listen(port, function () {
  console.log('#EpicShit server running on localhost:' + port);
});
