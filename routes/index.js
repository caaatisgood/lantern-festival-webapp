var request = require('request');

module.exports = function (app) {

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

  // app.get('/api/wordcloud', function (req, res) {
  //   getWordCloud(function(data) {

  //   })
  // });

  app.use('*', function (req, res) {
    res.send("yeah!");
  });
}


var ACCESS_TOKEN = '';

var getByTag = function (callback) {
  var tag = '2017lanternfestival';
  var tagRecentUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + ACCESS_TOKEN;
  request(tagRecentUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}

var getByLocation = function (callback) {
  var location_id = '214902213';
  var locationUrl = 'https://api.instagram.com/v1/locations/' + location_id + '/media/recent?access_token=' + ACCESS_TOKEN;
  request(locationUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}

var getByTagMission2 = function (callback) {
  var tag = '2017lfmission2';
  var tagRecentUrl = 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=' + ACCESS_TOKEN;
  request(tagRecentUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(JSON.parse(body));
    }
  });
}

var getWordCloud = function (callback) {
  
}