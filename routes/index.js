var request = require('request');

module.exports = function (app) {

  app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });

  app.get('/api/tag', function (req, res) {
    getByTag(function(data) {
      res.json(data);
    })
  });

  app.get('/api/location', function (req, res) {
    getByLocation(function(data) {
      res.json(data);
    })
  });

  app.get('/api/mission2', function (req, res) {
    getByTagMission2(function(data) {
      res.json(data);
    })
  });

  app.use('*', function (req, res) {
    res.send("yeah!");
  });
}

// 1624245207.ef65aa6.9b24069f5e3b452282bcd31a75dda8df

var ACCESS_TOKEN = '3475935603.9a87aab.501989d78f4a4c31b7656c0064902fe7';

function getByTag(callback) {
  var tag = '2017lanternfestival';
  var tagRecentUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + ACCESS_TOKEN;
  request(tagRecentUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}

function getByLocation(callback) {
  var location_id = '214902213';
  var locationUrl = 'https://api.instagram.com/v1/locations/' + location_id + '/media/recent?access_token=' + ACCESS_TOKEN;
  request(locationUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}

function getByTagMission2(callback) {
  var tag = '2017lfmission2';
  var tagRecentUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + ACCESS_TOKEN;
  request(tagRecentUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}