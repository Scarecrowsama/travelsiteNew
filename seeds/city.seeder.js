const { Seeder } = require('mongoose-data-seed');
const City = require('../backend/_cities/city-model');

const data = [
  {
    name: 'Tokyo',
    attractions: [],
    eateries: [],
    cityCards: [],
    itineraries: [],
    gettingAround: [
      {
        method: 'JR Trains',
        priceRange: '100-200',
        discountTickets: true,
        app: false,
        description: 'Japan Rail Trains Operate accross Japan.'
      }
    ],
    tours: [],
    country: { id: '5d6a3ded4b2b5d499cb928ac', name: 'Japan' },
    rating: {}
  }
];

class CitySeeder extends Seeder {

  async shouldRun() {
    return City.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return City.create(data);
  }
}

module.exports = CitySeeder;
