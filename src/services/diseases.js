const DiseaseModel = require('../models/disease');

module.exports = {
  async add(req, res, next) {
    if (!req.body.name) {
      res.sendStatus(400);
      return;
    }

    try {
      await DiseaseModel.create({
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
      result = await DiseaseModel.find();
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

    console.log(result);

    res.sendStatus(200);
  },

  async remove(req, res, next) {
    let result;

    try {
      result = await DiseaseModel.deleteOne({
        _id: req.params.id,
      })
    } catch(e) {
      next(e)
    }

    console.log(result);

    res.sendStatus(200);
  }
}