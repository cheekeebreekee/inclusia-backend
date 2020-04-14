const { Schema, model } = require('../../loaders/db');

const SpecialityModel = model('Speciality', new Schema({
  name: String,
}));

module.exports = SpecialityModel;
