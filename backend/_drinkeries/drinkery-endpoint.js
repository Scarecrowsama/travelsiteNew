const makeDrinkery = require('./drinkery-maker');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function drinkeryEndpointHandler({ drinkeryFactory }) {

  return async function drinkeryHandler(httpRequest) {

    switch(httpRequest.method) {
      case 'GET':
        return getDrinkeries(httpRequest);
      case 'POST':
        return postDrinkeries(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method is not allowed.`
        });
    }

    async function getDrinkeries(httpRequest) {
      try {
        const { drinkeryId } = httpRequest.pathParams || {};
        const result = drinkeryId ? await drinkeryFactory.findById({ drinkeryId }) : await drinkeryFactory.findAll();

        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: result ? 200 : 404,
          data: {
            success: result ? true : false,
            drinkeries: result ? result : 'No results found.'
          }
        };   
      } 
      catch(error) {
        return makeHttpError({ statusCode: 404, errorMessage: error.message });
      }
    };

    async function postDrinkeries(httpRequest) {

      let drinkeryInfo = httpRequest.body.drinkery;
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};

      if(!drinkeryInfo) {
        return makeHttpError({ statusCode: 400, errorMessage: 'No Drinkery info.' });
      }
      
      if(typeof httpRequest.body === 'string') {
        try {
          drinkeryInfo = JSON.parse(drinkeryInfo);
        } catch(error) {
          return makeHttpError({
            statusCode: 400,
            errorMessage: 'Post request must be valid JSON.'
          });
        }
      }

      try {
        // const newDrinkeryObject = makeDrinkery(drinkeryInfo);
        const data = isUpdate
          ? await drinkeryFactory.edit({ drinkeryId: id , newInfo: { drinkeryInfo } })
          : isDelete 
            ? await drinkeryFactory.remove({ drinkeryId: id })
            : isCreate
              ? await drinkeryFactory.add(drinkeryInfo)
              : null;
        
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: {
            success: data ? true : false,
            ...(data && { drinkeryCreated: data })
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