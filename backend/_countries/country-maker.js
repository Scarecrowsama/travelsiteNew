const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidCountryObject(countryInfo = requiredParam('country')) {
  const validCountry = validate(countryInfo);
  const normalizedCountry = normalize(validCountry);

  return Object.freeze(normalizedCountry);

  function validate() {

  }

  function normalize() {
    
  }
};