const database = require('../database/db-connection');
const regionFactory = require('./region-resolver')({ database });
const regionHandler = require('./region-endpoint')({ regionFactory });

module.exports = regionHandler;