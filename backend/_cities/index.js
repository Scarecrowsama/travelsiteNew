const cityModel = require('./city-model');
const cityFactory = require('./city-resolver')({ cityModel });
const cityHandler = require('./city-endpoint')({ cityFactory });

module.exports = cityHandler;