const InstitutionModel = require('../models/institution');
const DiseaseModel = require('../models/disease');
const GraduationLevelModel = require('../models/graduationLevel');
const SpecialityModel = require('../models/speciality');
const SpecializationModel = require('../models/specialization');
const SpecializationValidationSchema = require('../middleware/validationSchemas/specialization');
const { everyAsync } = require('../utils');

module.exports = {
  async add(req, res, next) {
    try {
      await SpecializationModel.create(req.body);
    } catch(e) {
      next(e);
    }
    
    res.sendStatus(200);
  },

  async get(req, res, next) {
    let result;

    try {
      result = await SpecializationModel.findOne();
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
      result = await SpecializationModel.find();
    } catch(e) {
      next(e);
    }
    
    res.send(result);
  },

  async update(req, res, next) {
    try {
      await SpecializationModel.updateOne({
        _id: req.params.id
      }, req.body)
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  },

  async remove(req, res, next) {
    try {
      await SpecializationModel.deleteOne({
        _id: req.params.id,
      })
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  },

  async validate(req, res, next) {
    try {
      await SpecializationValidationSchema.validateAsync(req.body);
    } catch (err) {
      console.log(err.toString());

      res
        .sendStatus(400);

      return;
    }

    next()
  },

  async validateSubIDs(req, res, next) {
    let isValid;

    try {
      isValid = await SpecialityModel.exists({ _id: req.body.specialityId })
        && await GraduationLevelModel.exists({ _id: req.body.graduationLevelId })
        && await InstitutionModel.exists({ _id: req.body.institutionId})
        && await everyAsync(req.body.eligibleDiseasesIdList, async (diseaseId) => {
          return await DiseaseModel.exists({ _id: diseaseId })
        })
    } catch (err) {
      next(err);
      return;
    }

    if (isValid) {
      next();
    } else {
      res.sendStatus(400);
    }
  }
}