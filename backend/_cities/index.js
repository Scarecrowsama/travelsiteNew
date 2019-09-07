const database = require('../database/db-connection');
const cityFactory = require('./city-resolver')({ database });
const cityHandler = require('./city-endpoint')({ cityFactory });

module.exports = cityHandler;