const { Seeder } = require('mongoose-data-seed');
const ThingToDo = require('../backend/_thingstodo/thingtodo-model');

const data = [
  {
    name: 'Sensoji Temple',
    price: 0,
    description: 'One of the most iconic temples in Japan',
    location: { 
      latitude: '35°42\'54.2\"N',
      longitude: '139°47\'47.8\"E',
      address: '2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan'
    },
    openingTimes: {
      mon: '9-17',
      tue: '9-17',
      wed: '9-17',
      thu: '9-17',
      fri: '9-17',
      sat: '9-17',
      sun: '9-17'
    },
    city: { 
      id: '5d6a41b73a127f2cc0353682',
      name: 'Tokyo'
    },
    countryId: '5d6a3ded4b2b5d499cb928ac', 
    rating: {}
  }
];

class ThingtodoSeeder extends Seeder {

  async shouldRun() {
    return ThingToDo.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return ThingToDo.create(data);
  }
}

module.exports = ThingtodoSeeder;
