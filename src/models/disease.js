const { Schema, model } = require('../../loaders/db');

const DiseaseModel = model('Disease', new Schema({
  name: String,
}));

module.exports = DiseaseModel;
