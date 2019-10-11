const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidItineraryObject(itineraryInfo = requiredParam('itinerary')) {
  
  const validItinerary = validate(itineraryInfo);
  const normalizedItinerary = normalize(validItinerary);

  return Object.freeze(normalizedItinerary);

  function validate({ name = requiredParam('name') } = {}) {
    return isNameValid(name) ? { name } : null;
  }

  function normalize({ name = requiredParam('name') } = {}) {
    return {
      name: capitalize(name.trim())
    };
  }
};