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
    if (!req.body.id || !req.body.newName) {
      res.sendStatus(400);
      return;
    }

    let result;

    try {
      result = await DiseaseModel.update({
        _id: req.body.id
      },{
        name: req.body.newName,
      })
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
      await SpecialityModel.deleteOne({
        _id: req.body.id,
      })
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  }
}