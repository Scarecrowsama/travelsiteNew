const { Seeder } = require('mongoose-data-seed');
const Rating = require('../backend/_ratings/rating-model');

const data = [
  {
    reference : '5d6a5cd3cd2d1036985da6c1',
    stars: { 
      one: 5,
      two: 5,
      three: 5,
      four: 5,
      five: 5
    },
    totalStars: 75,
    totalVotes: 375,
    averageRating: 5,
  }
];

class RatingSeeder extends Seeder {

  async shouldRun() {
    return Rating.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Rating.create(data);
  }
}

module.exports = RatingSeeder;
