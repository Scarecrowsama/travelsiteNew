const adaptRequest = require('../helpers/adapt-request');
const itineraryHandler = require('./index');

exports.itineraryController = async (req, res, next) => {
  itineraryHandler(adaptRequest(req))
  .then(({ headers, statusCode, data }) => {
    res.set(headers).status(statusCode).json(data);
  })
  .catch(err => console.log(err));
}