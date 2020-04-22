const idValidator = require('../middleware/validationSchemas/id');

module.exports = {
  async validateIdParam(req, res, next) {
    try {
      await idValidator.validateAsync(req.params.id);
    } catch (err) {
      console.log(err);

      res.sendStatus(400);
      return;
    }

    next();
  }
}