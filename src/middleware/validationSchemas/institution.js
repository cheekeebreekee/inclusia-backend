const Joi = require('@hapi/joi');

const InstitutionSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(255)
    .required(),
  address: Joi.string()
    .min(3)
    .max(255)
    .required(),
  tel: Joi.string()
    .min(3)
    .max(255)
    .required(),
  localityId: Joi.string()
    .token()
    .length(24)
    .required()
});

module.exports = InstitutionSchema;
