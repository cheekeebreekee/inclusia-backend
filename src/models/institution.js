const { Schema, model } = require('../../loaders/db');

const InstitutionModel = model('Institution', new Schema({
  name: String,
  address: String,
  tel: String,
  coords: String,
}));

module.exports = InstitutionModel;
