const SpecialityModel = require('../models/speciality');

module.exports = {
  async add(req, res, next) {
    if (!req.body.name) {
      res.sendStatus(400);
      return;
    }

    try {
      await SpecialityModel.create({
        name: req.body.name
      })
    } catch(e) {
      next(e);
    }
    
    res.sendStatus(200);
  },

  async getAll(req, res, next) {
    let result;

    try {
      result = await SpecialityModel.find();
    } catch(e) {
      next(e);
    }
    
    res.send(result);
  },

  async update(req, res, next) {
    if (!req.body.name) {
      res.sendStatus(400);
      return;
    }

    let result;

    try {
      result = await DiseaseModel.updateOne({
        _id: req.params.id
      },{
        name: req.body.name,
      })
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  },

  async remove(req, res, next) {
    try {
      await SpecialityModel.deleteOne({
        _id: req.params.id,
      })
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  }
}