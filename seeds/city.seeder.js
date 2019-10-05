const { Seeder } = require('mongoose-data-seed');
const City = require('../backend/_cities/city-model');

const data = [
  { 
    basics: 
    { name: 'Tokyo',
      country: { id: '5d750d763d1f7f41ec485edd', name: 'Japan' },
      cityCards: [] },
   costs: 
    { food: 
       [ { place: 'Restaurants',
           cost: 3,
           comments: 'Restaurants in Tokyo' } ],
      accommodation: [ { place: 'Hostel', cost: 3, comments: 'Hostels in Tokyo' } ],
      transport: 
       [ { method: 'Tokyo Metro',
           cost: 2.5,
           comments: 'The Tokyo Metro system' } ],
      others: [],
      discountCards: [],
      averages: 
       { food: 'Medium',
         accommodation: 'Medium-High',
         transport: 'Medium',
         phoneInternet: 'Medium',
         others: 'Medium',
         avgPerDay: '40-50' } },
    thingsToDo: 
      { sightseeing: { theaters: [], museums: [], landmarks: [], temples: [] },
        kids: { themeparks: [] },
        nature: { parks: [], hikes: [] },
        water: { dives: [] },
        extreme: { skyDives: [] },
        nightlife: { pubs: [], bars: [], discos: [] },
        gambling: { casinos: [] },
        festivals: [],
        events: [],
        attractions: [],
        markets: [] },
    gettingAround: 
      { transportation: 
        { method: 'Bus',
          priceRange: '100-300',
          discountTickets: true,
          app: true,
          description: 'Buses in Tokyo' },
        itineraries: [],
        tours: [] },
    foodAndDrink: { eateries: [], drinkeries: [] },
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
