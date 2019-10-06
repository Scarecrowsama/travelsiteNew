const adaptRequest = require('../helpers/adapt-request');
const regionHandler = require('./index');

exports.regionController = async (req, res, next) => {
  regionHandler(adaptRequest(req))
  .then(({ headers, statusCode, data }) => {
    res.set(headers).status(statusCode).json(data);
  })
  .catch(err => console.log(err));
}