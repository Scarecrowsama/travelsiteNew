const eateryModel = require('./eatery-model');
const eateryFactory = require('./eatery-resolver')({ eateryModel });
const eateryHandler = require('./eatery-endpoint')({ eateryFactory });

module.exports = eateryHandler;