const makeAValidRegionObject = require('./region-maker');

module.exports = function makeRegionsResolver({ regionModel }) {

    return Object.freeze({
      add,
      findById,
      findAll,
      edit,
      remove
    });

    async function add({ name }) {
      const newRegionObject = makeAValidRegionObject({ name });
      const createRegionInDb = await regionModel.create(newRegionObject);
      return createRegionInDb.save();
    };

    async function findById({ regionId }) {
      return regionModel.findById(regionId.trim());
      //Need to validate the id.
    };

    async function findAll() {
      return regionModel.find();
    };

    async function edit({ regionId, newInfo }) {
      return regionModel.updateOne({ _id: regionId.trim() }, newInfo);
    };

    async function remove({ regionId }) {
      return regionModel.deleteOne({ _id: regionId });
    };

  };