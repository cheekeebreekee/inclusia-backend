const Router = require('express').Router();
const { validateIdParam } = require('../services/base');
const {
  add,
  getAll,
  update,
  remove
} = require('../services/localities');

Router
  .post('/add', add)

Router
  .get('/getAll', getAll)

Router
  .put('/update/:id', validateIdParam, update)

Router
  .delete('/delete/:id', validateIdParam, remove);

module.exports = Router;
