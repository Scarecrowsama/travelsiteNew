const mongoose = require('mongoose');

const itinerary = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  typeOfItinerary: { type: String, required: true },
  priceRange: { type: String, required: true },
  totalDays: { type: Number, required: true },
  recommendedFor: { type: String, required: true },
  route: [
    {  
      _id: false,
      duration: { type: Number },
      leg: { type: mongoose.Schema.Types.ObjectId, ref: 'ThingToDo' },
      comments: { type: String } 
    }
  ],
  cityId: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
}, { strict: true });

module.exports = mongoose.model('Itinerary', itinerary);