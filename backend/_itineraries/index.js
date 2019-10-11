const itineraryModel = require('./itinerary-model');
const itineraryFactory = require('./itinerary-resolver')({ itineraryModel });
const itineraryHandler = require('./itinerary-endpoint')({ itineraryFactory });

module.exports = itineraryHandler;