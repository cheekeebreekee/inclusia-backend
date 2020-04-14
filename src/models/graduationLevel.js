const { Schema, model } = require('../../loaders/db');

const GraduationLevelModel = model('Graduation Level', new Schema({
  name: String,
}));

module.exports =  GraduationLevelModel;
 