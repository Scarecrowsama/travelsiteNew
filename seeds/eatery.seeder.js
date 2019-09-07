const { Seeder } = require('mongoose-data-seed');
const Eatery = require('../backend/_eateries/eatery-model');

const data = [
  {
    name: 'Test Restaurant in Japan',
    cuisine: 'Japanese',
    typeOfPlace: 'Restaurant',
    priceRange: '500-1000',
    website: 'http://www.japaneserestaurant.jp',
    location: {
      latitude: '35°40\'41.5',
      longitude: '139°46\'11.3',
      address: '123 Japanese Street, Tokyo, Japan'
    },
    dietaryOptions: [
      { option: 'Gluten Free' },
      { option: 'Vegetarian' }
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

class EaterySeeder extends Seeder {

  async shouldRun() {
    return Eatery.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Eatery.create(data);
  }
}

module.exports = EaterySeeder;
