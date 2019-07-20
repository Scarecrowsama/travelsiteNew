const makeRegion = require('./region');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function regionEndpointHandler({ regionFactory }) {
  
  return async function regionHandler(httpRequest) {
    console.log(httpRequest);

    switch(httpRequest.method) {
      case 'GET':
        return getRegions(httpRequest);
      case 'POST':
        return postRegions(httpRequest);
      default:
        return {};
    }

    async function getRegions(httpRequest) {
      const data = await regionFactory.add(httpRequest.body);
      return { 
        headers: {
          'Content-Type': 'application/json'
        },
        statusCode: 201,
        data: data
       }
    };

    async function postRegions(httpRequest) {

    };

  };
}