const Joi = require('@hapi/joi');

const SpecializationSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(255)
    .required(),
  description: Joi.string()
    .optional(),
  imageURL: Joi.string()
    .uri()
    .optional(),
  isBarrierFreeEnvironment: Joi.bool()
    .required(),
  isRemoteEducationAvailable: Joi.bool()
    .required(),
  graduationLevelId: Joi.string()
    .token()
    .length(24)
    .required(),
  specialityId: Joi.string()
    .token()
    .length(24)
    .required(),
  institutionId: Joi.string()
    .token()
    .length(24)
    .required(),
  eligibleDiseasesIdList: Joi.array()
    .items(
      Joi.string()
        .token()
        .length(24)
        .required())
    .min(1)
    .required()
});

module.exports = SpecializationSchema;
