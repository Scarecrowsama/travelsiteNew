const makeAValidCityObject = require('./city');
const cityModel = require('./city-model');

module.exports = function makeCityResolver({ database }) {
  return Object.freeze({
    add,
    findById,
    findAll,
    update,
    remove
  });

  async function add({ name, country, ...otherInfo }) {
    const newCityObject = makeAValidCityObject({ name, country, ...otherInfo });
    const createCityInDb = await cityModel.create(newCityObject);
    return createCityInDb.save();
  };

  async function findById({ cityId }) {
    return await cityModel.findById(cityId.trim());
  };

  async function findAll() {

  };

  async function update() {

  };

  async function remove() {

  };

};