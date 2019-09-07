const makeRegion = require('./region-maker');
const makeHttpError = require('../helpers/errorHandling/http-error');
// const validateBodyRequest = require('../helpers/validation/validate-body-request');

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
        const result = id 
                          ? await regionFactory.findById({ regionId: id })
                          : await regionFactory.findAll();
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: result
        };
      }
      catch(error) {
        return makeHttpError({
          statusCode: 404,
          errorMessage: error.message
        });
      }

    };

    async function postRegions(httpRequest) {

      let regionInfo = httpRequest.body;
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};
      // const isBodyValid = await validateBodyRequest(httpRequest.body);
      // console.log(isBodyValid);
      if(!regionInfo) {
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. No POST body.'
        });
      }
      
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

        const newRegionObject = makeRegion(regionInfo);
        const result = isUpdate
          ? await regionFactory.edit({ regionId: id , newInfo: { name: httpRequest.body.name } })
          : isDelete 
            ? await regionFactory.remove({ regionId: id })
            : isCreate
              ? await regionFactory.add(newRegionObject)
              : 'Nothing to do here mate';
        
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 201,
          data: result
         }
      }
      catch(error) {
        return makeHttpError({
          statusCode: 500,
          errorMessage: error.message + ' mother fucker.'
        });
      }
    };

  };

}