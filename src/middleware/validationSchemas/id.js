const Joi = require('@hapi/joi');

const idValidator = Joi.string()
  .token()
  .length(24)
  .required();

module.exports = idValidator;
