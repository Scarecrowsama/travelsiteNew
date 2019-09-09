const mongoose = require('mongoose');

const city = new mongoose.Schema({
  name: { type: String, required: true },
  attractions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' }],
  eateries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Eatery' }],
  cityCards: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CityCard' }],
  // thingsToDo: [{}],
  itineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }],
  gettingAround: [
    {
      method: { type: String },
      priceRange: { type: String },
      discountTickets: { type: Boolean },
      app: { type: Boolean },
      description: { type: String }
    }
  ],
  tours: [],
  country: { id: { type: mongoose.Schema.Types.ObjectId, name: 'Country' }, name: String },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  }
}, { strict: true,  timestamps: true });

module.exports = mongoose.model('City', city);

// theater
// museum
// market
// attraction
// festival
// themePark
// landmark
// park
// event
// temple