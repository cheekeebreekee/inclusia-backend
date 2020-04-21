const { Schema, model } = require('../../loaders/db');

const InstitutionModel = model('Institution', new Schema({
  name: String,
  address: String,
  tel: String,
  localityId: String,
}));

module.exports = InstitutionModel;
