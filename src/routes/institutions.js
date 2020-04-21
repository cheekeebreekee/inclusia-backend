const Router = require('express').Router();
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
  .get('/get', get)

Router
  .get('/getAll', getAll)

Router
  .put('/update', validate, update)

Router
  .delete('/delete', remove);

module.exports = Router;
