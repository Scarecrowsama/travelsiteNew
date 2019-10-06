const requiredParam = require('../helpers/required-param');
const { isNameValid } = require('../helpers/validation/input-validation');
const capitalize = require('../helpers/normalization/capitalize');

module.exports = function makeAValidDrinkeryObject(drinkeryInfo = requiredParam('drinkery')) {
  
  const validDrinkery = validate(drinkeryInfo);
  const normalizedDrinkery = normalize(validDrinkery);

  return Object.freeze(normalizedDrinkery);

  function validate({ name = requiredParam('name') } = {}) {
    return isNameValid(name) ? { name } : null;
  }

  function normalize({ name = requiredParam('name') } = {}) {
    return {
      name: capitalize(name.trim())
    };
  }
};