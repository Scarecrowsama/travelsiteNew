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
        const { id } = httpRequest.pathParams || {};
        const result = id ? await regionFactory.findById({ regionId: id }) : null;
        
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: result
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
      console.log(typeof httpRequest.body);
      if(typeof httpRequest.body === 'string') {
        try {
          regionInfo = JSON.parse(regionInfo);
        } catch(error) {
          return makeHttpError({
            statusCode: 400,
            errorMessage: 'Post request must be valid JSON.'
          });
        }
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