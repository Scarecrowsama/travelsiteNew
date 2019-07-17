const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const upperFirstLetter = require('../helpers/normalization/upperFirstLetter');

module.exports = function makeRegion(regionInfo = requiredParam('region')) {

  const validRegion = validate(regionInfo);
  const normalizedRegion = normalize(validRegion);

  return Object.freeze(normalizedRegion);

  function validate({ name = requiredParam('name') } = {}) {
    return isNameValid(name) ? { name } : null;
  }

  function normalize({ name }) {
    return {
      name: upperFirstLetter(name)
    };
  }

};