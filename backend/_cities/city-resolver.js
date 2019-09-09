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

  async function add(cityDetails) {
    const newCityObject = makeAValidCityObject(cityDetails);
    const newCityInstance = await cityModel.create(newCityObject);
    return newCityInstance.save();
  };

  async function findById({ cityId }) {
    return await cityModel.findById(cityId.trim());
  };

  async function findAll() {
    return cityModel.find();
  };

  async function update({ cityId, updatedDetails }) {
    return cityModel.updateOne({ _id: cityId.trim() }, updatedDetails);
  };

  async function remove({ cityId }) {
    return cityModel.deleteOne({ _id: cityId });
  };

};