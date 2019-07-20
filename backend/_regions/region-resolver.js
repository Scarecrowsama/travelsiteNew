const makeAValidRegionObject = require('../_regions/region');
const regionModel = require('./region-model');

module.exports = function makeRegionsResolver({ database }) {

    return Object.freeze({
      add,
      findById,
      findAll,
      update,
      remove
    });

    async function add({ name }) {
      const newRegionObject = makeAValidRegionObject({ name });
      const createRegionInDb = await regionModel.create(newRegionObject);
      return createRegionInDb.save();
    };

    async function findById({ regionId }) {
      return await regionModel.findById(regionId.trim());
      //Need to validate the id.
    };

    async function findAll() {

    };

    async function update() {
      
    };

    async function remove() {
      
    };

  };