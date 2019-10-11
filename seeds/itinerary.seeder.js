const { Seeder } = require('mongoose-data-seed');
const Itinerary = require('../backend/_itineraries/itinerary-model');

const data = [
  {
    name: 'Tokyo Temples',
    description: 'An unbeatable experience covering the most amazing temples in Tokyo.',
    typeOfItinerary: 'City Sightseeing',
    priceRange: '1000-2000',
    totalDays: 1,
    recommendedFor: 'Solo Travelers',
    route: [],
    cityId: '5d9a143f66d02a194c67a36d',
  }
];

class ItinerarySeeder extends Seeder {

  async shouldRun() {
    return Itinerary.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Itinerary.create(data);
  }
}

module.exports = ItinerarySeeder;
