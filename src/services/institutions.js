const InstitutionModel = require('../models/institution');
const LocalityModel = require('../models/locality');
const InstitutionValidationSchema = require('../middleware/validationSchemas/institution');

module.exports = {
  async add(req, res, next) {
    try {
      if (!await LocalityModel.exists({
        _id: req.body.localityId,
      })) {
        res.sendStatus(400);
        return;
      }

      await InstitutionModel.create(req.body);
    } catch(e) {
      next(e);
    }
    
    res.sendStatus(200);
  },

  async get(req, res, next) {
    if (!req.body.id) {
      res.sendStatus(400);
      return;
    }

    let result;

    try {
      result = await InstitutionModel.findOne();
    } catch(e) {
      next(e);
    }

    if (!result) {
      res.sendStatus(404);
      return;
    }

    res
      .json(result)
      .send();
  },

  async getAll(req, res, next) {
    let result;

    try {
      result = await InstitutionModel.find();
    } catch(e) {
      next(e);
    }
    
    res.send(result);
  },

  async update(req, res, next) {
    if (!req.body.id) {
      res.sendStatus(400);
      return;
    }

    try {
      if (!await LocalityModel.exists({
        _id: req.body.localityId,
      })) {
        res.sendStatus(400);
        return;
      }

      await InstitutionModel.update({
        _id: req.body.id
      }, req.body)
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  },

  async remove(req, res, next) {
    if (!req.body.id) {
      res.sendStatus(400);
      return;
    }

    try {
      await InstitutionModel.deleteOne({
        _id: req.body.id,
      })
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  },

  async validate(req, res, next) {
    try {
      await InstitutionValidationSchema.validateAsync(req.body);
    } catch (err) {
      console.log(err.toString());

      res
        .sendStatus(400);

      return;
    }

    next()
  }
}