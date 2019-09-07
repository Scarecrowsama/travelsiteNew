const makeCity = require('./city');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function cityEndpointHandler({ cityFactory }) {
  return async function cityHandler(httpRequest) {
    switch(httpRequest.method) {
      case 'GET':
        return getCities(httpRequest);
      case 'POST':
        return postCity(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method is not allowed.`
        });
    }

    async function getCities(httpRequest) {

    };

    async function postCity(httpRequest) {

    }

  };
};