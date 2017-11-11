const MarioChracter = require('./models/mariochars');
const assert = require('assert');

var characters = new MarioChracter({
  name: 'Mario',
  age: 50
});

characters.save().then(function() {
  assert(characters.isNew===false);
});

// characters.find(function (err, characters) {
//   if (err) return console.error(err);
//   console.log(characters);
// });