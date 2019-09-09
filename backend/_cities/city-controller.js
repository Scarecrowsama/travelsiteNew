const adaptRequest = require('../helpers/adapt-request');
const cityHandler = require('./index');

exports.cityController = async (req, res, next) => {
  cityHandler(adaptRequest(req))
    .then(({ headers, statusCode, data }) => {
      res.set(headers).status(statusCode).json(data);
    })
    .catch(err => console.log('Controller error...'));
}