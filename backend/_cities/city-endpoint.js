const makeCity = require('./city-maker');
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
      try {
        const { id } = httpRequest.pathParams || {};
        const result = id ? await cityFactory.findById({ cityId: id })
                          : await cityFactory.findAll();
        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: result
        };
      }
      catch(error) {
        makeHttpError({
          statusCode: 404,
          errorMessage: error.message
        });
      }
    };

    async function postCity(httpRequest) {
      let cityInfo = httpRequest.body.city;
      console.log(cityInfo);
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};

      if(!cityInfo) {
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. No POST body.'
        });
      }

      if(typeof httpRequest.body === 'string') {
        try {
          cityInfo = JSON.parse(cityInfo);
        } catch(error) {
          return makeHttpError({
            statusCode: 400,
            errorMessage: 'Post request must be valid JSON.'
          });
        }
      }

      try {
        // const newCityObject = makeCity(cityInfo);
        const result = isCreate
                        ? await cityFactory.add(cityInfo)
                        : isUpdate
                          ? await cityFactory.edit({ cityId: id, newInfo: { cityInfo } })
                          : isDelete
                            ? await cityFactory.remove({ cityId: id })
                            : null;

        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
          data: result
        };
      } catch(error) {
        makeHttpError({
          statusCode: 500,
          errorMessage: error.message + 'mother fucker.'
        });
      }

    }
  };
};