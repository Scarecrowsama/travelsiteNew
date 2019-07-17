const { RequiredParameterError } = require('./errorHandling/errors');

module.exports = function requiredParam(param) {
  throw new RequiredParameterError(param);
}