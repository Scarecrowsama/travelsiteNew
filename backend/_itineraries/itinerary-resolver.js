const makeAValidItineraryObject = require('./itinerary-maker');
const City = require('../_cities/city-model');

module.exports = function makeItineraryyResolver({ itineraryModel }) {
  return Object.freeze({
    add,
    findById,
    findAll,
    edit,
    remove
  });

  async function add(itineraryDetails) {
    // const newItineraryObject = makeAValidItineraryObject(itineraryDetails); TODO
    const newItineraryInstance = await itineraryModel.create(itineraryDetails);
    const cityItinerary = await City.findById(itineraryDetails.cityId);
    cityItinerary.gettingAround.itineraries.push(newItineraryInstance._id);
    await cityItinerary.save();
    return newItineraryInstance;
  }

  async function findById({ itineraryId }) {
    return itineraryModel.findById(itineraryId.trim());
  }

  async function findAll() {
    return itineraryModel.find();
  }

  async function edit({ itineraryId, updatedDetails }) {
    return itineraryModel.updateOne({ _id: itineraryId.trim() }, updatedDetails);
  }

  async function remove({ itineraryId }) {
    return itineraryModel.deleteOne({ _id: itineraryId });
  }
}