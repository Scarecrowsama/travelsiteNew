const regionModel = require('./region-model');
const regionFactory = require('./region-resolver')({ regionModel });
const regionHandler = require('./region-endpoint')({ regionFactory });

module.exports = regionHandler;