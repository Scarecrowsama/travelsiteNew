const drinkeryModel = require('./drinkery-model');
const drinkeryFactory = require('./drinkery-resolver')({ drinkeryModel });
const drinkeryHandler = require('./drinkery-endpoint')({ drinkeryFactory });

module.exports = drinkeryHandler;