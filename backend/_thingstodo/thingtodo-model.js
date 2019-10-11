const mongoose = require('mongoose');

const thingToDo = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
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
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    name: { type: String, required: true }
  },
  countryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  }
}, { strict: true,  timestamps: true });

module.exports = mongoose.model('ThingToDo', thingToDo);