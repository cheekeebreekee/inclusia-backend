const { Schema, model } = require('../../loaders/db');

const SpecializationModel = model('Specialization', new Schema({
  title: String,
  specialityId: String,
  description: String,
  graduationLevelId: String,
  institutionId: String,
  eligibleDiseasesIdList: [ String ],
  imageURL: String,
  isBarrierFreeEnvironment: Boolean,
  isRemoteEducationAvailable: Boolean,
}));

module.exports = SpecializationModel;
