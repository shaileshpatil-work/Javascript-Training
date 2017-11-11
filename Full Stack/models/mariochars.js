const mongooseService = require('mongoose');
const Schema = mongooseService.Schema;

// Create Schema and Model

const MarioChracterSchema = new Schema({
  name: String,
  age: Number
});

// mongoose.model('collectionName', schemaName);

const MarioChracter = mongooseService.model('mariochars', MarioChracterSchema);

module.exports = MarioChracter;
