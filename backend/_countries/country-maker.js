const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const upperFirstLetter = require('../helpers/normalization/upperFirstLetter');

module.exports = function makeAValidCountryObject(countryInfo = requiredParam('country')) {
  const validRegion = validate(country);
  const normalizedRegion = normalize(validRegion);

  return Object.freeze(normalizedRegion);

  function validate() {

  }

  function normalize() {
    
  }
};