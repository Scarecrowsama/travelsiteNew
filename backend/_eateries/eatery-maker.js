const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidEateryObject(eateryInfo = requiredParam('eatery')) {
  
  const validEatery = validate(eateryInfo);
  const normalizedEatery = normalize(validEatery);

  return Object.freeze(normalizedEatery);

  function validate({ name = requiredParam('name') } = {}) {
    return isNameValid(name) ? { name } : null;
  }

  function normalize({ name = requiredParam('name') } = {}) {
    return {
      name: capitalize(name.trim())
    };
  }
};