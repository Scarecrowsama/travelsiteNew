const countryModel = require('./country-model');
const countryFactory = require('./country-resolver')({ countryModel });
const countryHandler = require('./country-endpoint')({ countryFactory });

module.exports = countryHandler;