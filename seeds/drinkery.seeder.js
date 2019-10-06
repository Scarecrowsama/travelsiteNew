const { Seeder } = require('mongoose-data-seed');
const Drinkery = require('../backend/_drinkeries/drinkery-model');

const data = [
  {
    name: 'Test Drinkery in Tokyo',
    typeOfPlace: 'Bar',
    foodOptions: { isAvailable: true, comments: 'Snacks' },
    priceRange: '500-1000',
    website: 'http://www.japanesedrinkery.jp',
    location: {
      latitude: '35°40\'41.5',
      longitude: '139°46\'11.3',
      address: '123 Japanese Street, Tokyo, Japan'
    },
    dietaryOptions: [
      { option: 'Alcohol Free' },
    ],
    deliveryServices: [
      { name: 'Japan Eats', app: true, appName: 'Japan Eats', description: 'Japan\'s number one food delivery service.'}
    ],
    openingTimes: {
      mon: 'All Day Long',
      tue: 'All Day Long',
      wed: 'All Day Long',
      thu: 'All Day Long',
      fri: 'All Day Long',
      sat: 'All Day Long',
      sun: 'All Day Long',
      special: 'We only close when we run out of employees.'
    },
    cityId: '5d6a41b73a127f2cc0353682',
    rating: {}
  }
];

class DrinkerySeeder extends Seeder {

  async shouldRun() {
    return Drinkery.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Drinkery.create(data);
  }
}

module.exports = DrinkerySeeder;
