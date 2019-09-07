const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidRegionObject(regionInfo = requiredParam('region')) {

  const validRegion = validate(regionInfo);
  const normalizedRegion = normalize(validRegion);

  return Object.freeze(normalizedRegion);

  function validate({ name = requiredParam('name') } = {}) {
    return isNameValid(name) ? { name } : null;
  }

  function normalize({ name = requiredParam('name') } = {}) {
    return {
      name: capitalize(name.trim())
    };
  }

};