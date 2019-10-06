const adaptRequest = require('../helpers/adapt-request');
const eateryHandler = require('./index');

exports.eateryController = async (req, res, next) => {
  eateryHandler(adaptRequest(req))
  .then(({ headers, statusCode, data }) => {
    res.set(headers).status(statusCode).json(data);
  })
  .catch(err => console.log(err));
}