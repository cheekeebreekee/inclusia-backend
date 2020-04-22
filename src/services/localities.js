const LocalityModel = require('../models/locality');

module.exports = {
  async add(req, res, next) {
    if (!req.body.name) {
      res.sendStatus(400);
      return;
    }

    try {
      await LocalityModel.create({
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
      result = await LocalityModel.find();
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
      result = await LocalityModel.updateOne({
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
      await LocalityModel.deleteOne({
        _id: req.params.id,
      })
    } catch(e) {
      next(e)
    }

    res.sendStatus(200);
  }
}