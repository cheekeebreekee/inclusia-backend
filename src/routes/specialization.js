const Router = require('express').Router();
const { validateIdParam } = require('../services/base');
const {
  add,
  get,
  getAll,
  update,
  remove,
  validate,
  validateSubIDs
} = require('../services/specializations');
const { aggregate } = require('../services/specializationsAggregation');

Router
  .post('/add', validate, validateSubIDs, add)

Router
  .get('/get/:id', validateIdParam, get)

Router
  .get('/getAll', getAll)

Router
  .put('/update/:id', validateIdParam, validate, validateSubIDs, update)

Router
  .delete('/delete/:id', validateIdParam, remove);

Router
  .get('/aggregate', aggregate)

module.exports = Router;
