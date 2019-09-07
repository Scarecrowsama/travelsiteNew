const makeHttpError = require('../errorHandling/http-error');

module.exports = async (httpBody) => {
  console.log('From the validate body ', httpBody);
  if(!httpBody) {
    return makeHttpError({
      statusCode: 400,
      errorMessage: 'Bad request. No POST body.'
    });
  }

  if(typeof httpBody === 'string') {
    try {
      const parsedBody = JSON.parse(httpBody);
      return parsedBody;
    } catch(error) {
      return makeHttpError({
        statusCode: 400,
        errorMessage: 'Post request must be valid JSON.'
      });
    }
  }

  return true;
}