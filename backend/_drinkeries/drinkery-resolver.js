const makeAValidDrinkeryObject = require('./drinkery-maker');
const City = require('../_cities/city-model');

module.exports = function makeEateryResolver({ drinkeryModel }) {
  return Object.freeze({
    add,
    findById,
    findAll,
    edit,
    remove
  });

  async function add(drinkeryDetails) {
    // const newEateryObject = makeAValidDrikeryObject(drinkeryDetails); TODO
    const newDrinkeryInstance = await drinkeryModel.create(drinkeryDetails);
    const cityDrinkery = await City.findById(drinkeryDetails.cityId);
    cityDrinkery.foodAndDrink.drinkeries.push(newDrinkeryInstance._id);
    await cityDrinkery.save();
    return newDrinkeryInstance;
  }

  async function findById({ drinkeryId }) {
    return drinkeryModel.findById(drinkeryId.trim());
  }

  async function findAll() {
    return drinkeryModel.find();
  }

  async function edit({ drinkeryId, updatedDetails }) {
    return drinkeryModel.updateOne({ _id: drinkeryId.trim() }, updatedDetails);
  }

  async function remove({ drinkeryId }) {
    return drinkeryModel.deleteOne({ _id: drinkeryId });
  }
}