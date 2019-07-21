const requiredParam = require('../helpers/required-param');
const { isNameValid, isCountryValid } = require('../helpers/validation/input-validation');
const upperFirstLetter = require('../helpers/normalization/upperFirstLetter');

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
      name: upperFirstLetter(name),
      country,
      ...otherInfo
    };
  }

};