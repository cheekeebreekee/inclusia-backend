const Router = require('express').Router();
const { validateIdParam } = require('../services/base');
const {
  add,
  get,
  getAll,
  update,
  remove,
  validate
} = require('../services/institutions');

Router
  .post('/add', validate, add)

Router
  .get('/get/:id', validateIdParam, get)

Router
  .get('/getAll', getAll)

Router
  .put('/update/:id', validateIdParam, validate, update)

Router
  .delete('/delete/:id', validateIdParam, remove);

module.exports = Router;
