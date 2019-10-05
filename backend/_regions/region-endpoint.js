const makeRegion = require('./region-maker');
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
        const { regionId } = httpRequest.pathParams || {};
        const result = regionId ? await regionFactory.findById({ regionId }) : await regionFactory.findAll();

        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: result ? 200 : 404,
          data: {
            success: result ? true : false,
            regions: result ? result : 'No results found.'
          }
        };   
      } 
      catch(error) {
        return makeHttpError({ statusCode: 404, errorMessage: error.message });
      }
    };

    async function postRegions(httpRequest) {

      let regionInfo = httpRequest.body.region;
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};

      if(!regionInfo) {
        return makeHttpError({ statusCode: 400, errorMessage: 'No region info.' });
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
        const data = isUpdate
          ? await regionFactory.edit({ regionId: id , newInfo: { name: httpRequest.body.name } })
          : isDelete 
            ? await regionFactory.remove({ regionId: id })
            : isCreate
              ? await regionFactory.add(newRegionObject)
              : null;
        
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: {
            success: data ? true : false,
            ...(data && { regionCreated: data })
          }
         }
      }
      catch(error) {
        return makeHttpError({
          statusCode: 500,
          errorMessage: error.message
        });
      }
    };
  };

}