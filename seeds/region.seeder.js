const { Seeder } = require('mongoose-data-seed');
const Region = require('../backend/_regions/region-model');

const data = [
  {
    name: 'Asia',
    countries: []
  },
  {
    name: 'Europe',
    countries: []
  },
  {
    name: 'North America',
    countries: []
  },
  {
    name: 'Caribbean',
    countries: []
  },
  {
    name: 'South America',
    countries: []
  },
  {
    name: 'Middle East',
    countries: []
  },
  {
    name: 'Africa',
    countries: []
  },
  {
    name: 'Australia/Oceania',
    countries: []
  }
];

class RegionSeeder extends Seeder {

  async shouldRun() {
    return Region.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Region.create(data);
  }
}

module.exports = RegionSeeder;
