const makeRegion = require('./region');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function regionEndpointHandler({ regionFactory }) {
  
  return async function regionHandler(httpRequest) {

    switch(httpRequest.method) {
      case 'GET':
        return getRegions(httpRequest);
      case 'POST':
        return postRegions(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method is not allowed.`
        });
    }

    async function getRegions(httpRequest) {

      try {
        const newRegion = await regionFactory.findById({ regionId: '5d32f13fbb37872f8801acdb' });
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: newRegion
        };
      } catch(error) {
        return makeHttpError({
          statusCode: 404,
          errorMessage: error.message
        });
      }

    };

    async function postRegions(httpRequest) {

      let regionInfo = httpRequest.body;

      if(!regionInfo) {
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. No POST body.'
        });
      }

      try {
        const newRegion = makeRegion(regionInfo);
        const createdRegion = await regionFactory.add(newRegion);
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 201,
          data: createdRegion
         }
      } catch(error) {
        return makeHttpError({
          statusCode: 500,
          errorMessage: error.message
        });
      }
    };

  };

}