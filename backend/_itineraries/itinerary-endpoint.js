const makeItinerary = require('./itinerary-maker');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function itineraryEndpointHandler({ itineraryFactory }) {

  return async function itineraryHandler(httpRequest) {

    switch(httpRequest.method) {
      case 'GET':
        return getItineraries(httpRequest);
      case 'POST':
        return postItineraries(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method is not allowed.`
        });
    }

    async function getItineraries(httpRequest) {
      try {
        const { itineraryId } = httpRequest.pathParams || {};
        const result = itineraryId ? await itineraryFactory.findById({ itineraryId }) : await itineraryFactory.findAll();

        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: result ? 200 : 404,
          data: {
            success: result ? true : false,
            itineraries: result ? result : 'No results found.'
          }
        };   
      } 
      catch(error) {
        return makeHttpError({ statusCode: 404, errorMessage: error.message });
      }
    };

    async function postItineraries(httpRequest) {

      let itineraryInfo = httpRequest.body.itinerary;
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};

      if(!itineraryInfo) {
        return makeHttpError({ statusCode: 400, errorMessage: 'No Itinerary info.' });
      }
      
      if(typeof httpRequest.body === 'string') {
        try {
          itineraryInfo = JSON.parse(itineraryInfo);
        } catch(error) {
          return makeHttpError({
            statusCode: 400,
            errorMessage: 'Post request must be valid JSON.'
          });
        }
      }

      try {
        // const newItineraryObject = makeRegion(itineraryInfo);
        const data = isUpdate
          ? await itineraryFactory.edit({ itineraryId: id , newInfo: { itineraryInfo } })
          : isDelete 
            ? await itineraryFactory.remove({ itineraryId: id })
            : isCreate
              ? await itineraryFactory.add(itineraryInfo)
              : null;
        
        return { 
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: {
            success: data ? true : false,
            ...(data && { itineraryCreated: data })
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