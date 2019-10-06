const makeEatery = require('./eatery-maker');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function eateryEndpointHandler({ eateryFactory }) {

  return async function eateryHandler(httpRequest) {

    switch(httpRequest.method) {
      case 'GET':
        return getEateries(httpRequest);
      case 'POST':
        return postEateries(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method is not allowed.`
        });
    }

    async function getEateries(httpRequest) {
      try {
        const { eateryId } = httpRequest.pathParams || {};
        const result = eateryId ? await eateryFactory.findById({ eateryId }) : await eateryFactory.findAll();

        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: result ? 200 : 404,
          data: {
            success: result ? true : false,
            eateries: result ? result : 'No results found.'
          }
        };   
      } 
      catch(error) {
        return makeHttpError({ statusCode: 404, errorMessage: error.message });
      }
    };

    async function postEateries(httpRequest) {

      let eateryInfo = httpRequest.body.eatery;
      console.log(eateryInfo);
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};

      if(!eateryInfo) {
        return makeHttpError({ statusCode: 400, errorMessage: 'No Eatery info.' });
      }
      
      if(typeof httpRequest.body === 'string') {
        try {
          eateryInfo = JSON.parse(eateryInfo);
        } catch(error) {
          return makeHttpError({
            statusCode: 400,
            errorMessage: 'Post request must be valid JSON.'
          });
        }
      }

      try {
        // const newEaterynObject = makeRegion(eateryInfo);
        const data = isUpdate
          ? await eateryFactory.edit({ eateryId: id , newInfo: { eateryInfo } })
          : isDelete 
            ? await eateryFactory.remove({ eateryId: id })
            : isCreate
              ? await eateryFactory.add(eateryInfo)
              : null;
        
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: {
            success: data ? true : false,
            ...(data && { eateryCreated: data })
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