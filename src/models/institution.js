const { Schema, model } = require('../../loaders/db');

const InstitutionModel = model('Institution', new Schema({
  name: String,
  address: String,
  tel: String,
  localityId: { type: Schema.Types.ObjectId, ref: 'Locality' },
}));

module.exports = InstitutionModel;
