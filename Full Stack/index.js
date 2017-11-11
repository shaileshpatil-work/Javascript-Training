const mongooseService = require('mongoose');
mongooseService.Promise = require('bluebird');

// Connect to Mongo DB

mongooseService.connect('mongodb://localhost/mytestdb');

mongooseService.connection.once('open', function() {
  console.log('The Connnection has been made, now make fireworks.');
}).on('error', function(error) {
  console.log('Connection error:', error);
});
