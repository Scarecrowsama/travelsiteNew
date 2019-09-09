const requiredParam = require('../helpers/required-param');
const { isNameValid, isCountryValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidCityObject(cityInfo = requiredParam('city')) {
  
  const validCity = validate(cityInfo);
  const normalizedCity = normalize(validCity);

  return Object.freeze(normalizedCity);

  function validate({ 
    name = requiredParam('name'),
    country = requiredParam('country'),
    ...otherInfo
  } = {}) {

    isNameValid(name);
    isCountryValid(country);
    return { name, country, ...otherInfo };
  }

  function normalize({ name, country, ...otherInfo }) {
    return {
      name: capitalize(name),
      country,
      ...otherInfo
    };
  }

};