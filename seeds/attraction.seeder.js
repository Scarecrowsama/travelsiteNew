const { Seeder } = require('mongoose-data-seed');
const Attraction = require('../backend/_attractions/attraction-model');

const data = [
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, default: 0, required: true }, //Use 0 for free and -1 for unknown.
    location: {
      latitude: String,
      longitude: String,
      address: String
    },
    openingTimes: {
      mon: String,
      tue: String,
      wed: String,
      thu: String,
      fri: String,
      sat: String,
      sun: String
    },
    city: { 
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
      name: { type: String, required: true }
    },
    rating: { 
      id: { type: Schema.Types.ObjectId, ref: 'Rating' },
      totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
    },
    article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
  }
];

class AttractionSeeder extends Seeder {

  async shouldRun() {
    return Attraction.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Attraction.create(data);
  }
}

module.exports = AttractionSeeder;
