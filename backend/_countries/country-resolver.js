const makeAValidCountryObject = require('./country-maker');

module.exports = function makeCountryResolver({ countryModel }) {
  return Object.freeze({
    add,
    findById,
    findAll,
    edit,
    remove
  });

  async function add(countryDetails) {
    // const newCountryObject = makeAValidCountryObject(countryDetails);
    const newCountryInstance = await countryModel.create(countryDetails);
    return newCountryInstance.save();
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