const { Schema, model } = require('../../loaders/db');

const SpecializationModel = model('Specialization', new Schema({
  title: String,
  specialityId: { type: Schema.Types.ObjectId, ref: 'Speciality' },
  description: String,
  graduationLevelId: { type: Schema.Types.ObjectId, ref: 'GraduationLevel' },
  institutionId: { type: Schema.Types.ObjectId, ref: 'Institution' },
  eligibleDiseasesIdList: [ { type: Schema.Types.ObjectId, ref: 'Disease' } ],
  imageURL: String,
  isBarrierFreeEnvironment: Boolean,
  isRemoteEducationAvailable: Boolean,
}));

module.exports = SpecializationModel;
