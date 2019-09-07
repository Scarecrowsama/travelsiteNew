const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidCountryObject(countryInfo = requiredParam('country')) {
  const validCountry = validate(countryInfo);
  const normalizedCountry = normalize(validCountry);

  return Object.freeze(normalizedCountry);

  function validate({ name = requiredParam('name') } = {}) {
    return isNameValid(name) ? { name } : null;
  }

  function normalize({ name = requiredParam('name') } = {}) {
    return {
      name: capitalize(name.trim())
    };
  }
};