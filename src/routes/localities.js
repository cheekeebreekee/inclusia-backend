const Router = require('express').Router();
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
  .put('/update', update)

Router
  .delete('/delete', remove);

module.exports = Router;