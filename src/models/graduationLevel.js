const { Schema, model } = require('../../loaders/db');

const GraduationLevelModel = model('GraduationLevel', new Schema({
  name: String,
}));

module.exports =  GraduationLevelModel;
 