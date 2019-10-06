const makeAValidCountryObject = require('./country-maker');
const Region = require('../_regions/region-model');

module.exports = function makeCountryResolver({ countryModel }) {
  return Object.freeze({
    add,
    findById,
    findAll,
    edit,
    remove
  });

  async function add(countryDetails) {
    // const newCountryObject = makeAValidCountryObject(countryDetails); TODO
    const newCountryInstance = await countryModel.create(countryDetails);
    const countryRegion = await Region.findById(countryDetails.basics.regionId);
    countryRegion.countries.push({ id: newCountryInstance._id, name: newCountryInstance.basics.name });
    await countryRegion.save();
    return newCountryInstance;
  }

  async function findById({ countryId }) {
    return countryModel.findById(countryId.trim());
  }

  async function findAll() {
    return countryModel.find();
  }

  async function edit({ countryId, updatedDetails }) {
    return countryModel.updateOne({ _id: countryId.trim() }, updatedDetails);
  }

  async function remove({ countryId }) {
    return countryModel.deleteOne({ _id: countryId });
  }
}