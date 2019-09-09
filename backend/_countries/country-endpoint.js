const makeCountry = require('./country-maker');
const makeHttpError = require('../helpers/errorHandling/http-error');

module.exports = function countryEndpointHandler({ countryFactory }) {
  return async function countryHandler(httpRequest) {
    switch(httpRequest.method) {
      case 'GET':
        return getCountries(httpRequest);
      case 'POST':
        return postCountries(httpRequest);
      default:
        return makeHttpError({
          statusCode: 405,
          errorMessage: `${httpRequest.method} method is not allowed.`
        });
    }
    
    async function getCountries(httpRequest) {
      try {
        const { id } = httpRequest.pathParams || {};
        const result = id
                          ? await countryFactory.findById({ countryId: id })
                          : await countryFactory.findAll();
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

    async function postCountries(httpRequest) {
      let countryInfo = httpRequest.body.country;
      const { isDelete, isUpdate, isCreate } = httpRequest.body;
      const { id } = httpRequest.pathParams || {};

      if(!countryInfo) {
        return makeHttpError({
          statusCode: 400,
          errorMessage: 'Bad request. No POST body.'
        });
      }

      if(typeof httpRequest.body === 'string') {
        try {
          countryInfo = JSON.parse(countryInfo);
        } catch(error) {
          return makeHttpError({
            statusCode: 400,
            errorMessage: 'Post request must be valid JSON.'
          });
        }
      }

      try {
        // const newCountryObject = makeCountry(countryInfo);
        const result = isCreate
                        ? await countryFactory.add(countryInfo)
                        : isUpdate
                          ? await countryFactory.edit({ countryId: id, newInfo: { countryInfo } })
                          : isDelete
                            ? await countryFactory.remove({ countryId: id })
                            : null;

        return {
          headers: {
            'Content-Type': 'application/json'
          },
          statusCode: 200,
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
  }
}