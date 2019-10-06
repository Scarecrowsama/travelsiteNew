const makeAValidEateryObject = require('./eatery-maker');
const City = require('../_cities/city-model');

module.exports = function makeEateryResolver({ eateryModel }) {
  return Object.freeze({
    add,
    findById,
    findAll,
    edit,
    remove
  });

  async function add(eateryDetails) {
    // const newEateryObject = makeAValidCountryObject(eateryDetails); TODO
    const newEateryInstance = await eateryModel.create(eateryDetails);
    const cityEatery = await City.findById(eateryDetails.cityId);
    cityEatery.foodAndDrink.eateries.push(newEateryInstance._id);
    await cityEatery.save();
    return newEateryInstance;
  }

  async function findById({ eateryId }) {
    return eateryModel.findById(eateryId.trim());
  }

  async function findAll() {
    return eateryModel.find();
  }

  async function edit({ eateryId, updatedDetails }) {
    return eateryModel.updateOne({ _id: eateryId.trim() }, updatedDetails);
  }

  async function remove({ eateryId }) {
    return eateryModel.deleteOne({ _id: eateryId });
  }
}