const adaptRequest = require('../helpers/adapt-request');
const countryHandler = require('./index');

exports.countryController = async (req, res, next) => {
  countryHandler(adaptRequest(req))
    .then(({ headers, statusCode, data }) => {
      res.set(headers).status(statusCode).json(data);
    })
    .catch(err => console.log('Controller error...'));
}