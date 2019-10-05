const mongoose = require('mongoose');

const city = new mongoose.Schema({
  basics: {
    name: { type: String, required: true },
    country: { id: { type: mongoose.Schema.Types.ObjectId, ref: 'Country' }, name: String },
    cityCards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CityCard' }]
  },
  costs: {
    food: [
      {
        place: { type: String, required: true },
        cost: { type: Number, required: true },
        comments: { type: String, required: true }
      }
    ],
    accommodation: [
      {
        place: { type: String, required: true },
        cost: { type: Number, required: true },
        comments: { type: String, required: true }
      }
    ],
    transport: [
      {
        method: { type: String, required: true },
        cost: { type: Number, required: true },
        comments: { type: String, required: true }
      }
    ],
    others: [
      {
        name: { type: String },
        cost: { type: Number },
        comments: { type: String }
      }
    ],
    discountCards: [
      {
        name: { type: String },
        discountsFor: { type: String },
        price: { type: String },
        details: { type: String },
        recommendedFor: { type: String }
      }
    ],
    averages: {
      food: { type: String },
      accommodation: { type: String },
      transport: { type: String },
      phoneInternet: { type: String },
      others: { type: String },
      avgPerDay: { type: String }
    }
  },
  thingsToDo: {
    sightseeing: {
      theaters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Theater' }],
      museums: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Museum' }],
      landmarks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Landmark' }],
      temples: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Temple' }],
    },
    kids: {
      themeparks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ThemePark' }],
    },
    nature: {
      parks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Park' }],
      hikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hike' }],
    },
    water: {
      dives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dive' }],
    },
    extreme: {
      skyDives: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SkyDive' }],
    },
    nightlife: {
      pubs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Pub' }],
      bars: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Bar' }],
      discos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Disco' }],
    },
    gambling: {
      casinos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Casino' }],
    },
    festivals: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Festival' }],
    events: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    attractions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' }],
    markets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Market' }]
  },
  gettingAround: {
    transportation : {
      method: { type: String },
      priceRange: { type: String },
      discountTickets: { type: Boolean },
      app: { type: Boolean },
      description: { type: String }
    },
    itineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],
    tours: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Tour' }],
  },
  foodAndDrink: {
    eateries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Eatery' }],
    drinkeries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Drinkery' }]
  },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  }
}, { strict: true,  timestamps: true });

module.exports = mongoose.model('City', city);