const mongoose = require('mongoose');

const eatery = new mongoose.Schema({
  name: String,
  cuisine: { type: String, required: true },
  typeOfPlace: { type: String, required: true },
  priceRange: { type: String, required: true },
  website: { type: String },
  location: {
    latitude: String,
    longitude: String,
    address: String
  },
  dietaryOptions: [{ option: String }],
  deliveryServices: [
    {
      name: String, app: Boolean, appName: String, description: String
    }
  ],
  openingTimes: {
    mon: String,
    tue: String,
    wed: String,
    thu: String,
    fri: String,
    sat: String,
    sun: String,
    special: String
  },
  cityId: { type: mongoose.Schema.Types.ObjectId, required: true },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  },
  article: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' }
}, {strict: true});

module.exports = mongoose.model('Eatery', eatery);