const { Seeder } = require('mongoose-data-seed');
const Model = require('../backend/');

const data = [
  {

  }
];

class UserSeeder extends Seeder {

  async shouldRun() {
    return Model.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Model.create(data);
  }
}

module.exports = UserSeeder;
