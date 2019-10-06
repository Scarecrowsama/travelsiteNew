const adaptRequest = require('../helpers/adapt-request');
const drinkeryHandler = require('./index');

exports.drinkeryController = async (req, res, next) => {
  drinkeryHandler(adaptRequest(req))
  .then(({ headers, statusCode, data }) => {
    res.set(headers).status(statusCode).json(data);
  })
  .catch(err => console.log(err));
}