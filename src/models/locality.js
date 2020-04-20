const { Schema, model } = require('../../loaders/db');

const LocalityModel = model('Locality', new Schema({
  name: String,
}));

module.exports = LocalityModel;
 