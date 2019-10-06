const mongoose = require('mongoose');

const drinkery = new mongoose.Schema({
  name: String,
  typeOfPlace: { type: String, required: true },
  foodOptions: { isAvailable: { type: Boolean }, comments: { type: String } },
  priceRange: { type: String, required: true },
  website: { type: String },
  location: {
    latitude: String,
    longitude: String,
    address: String
  },
  dietaryOptions: [{ _id: false, option: String }],
  deliveryServices: [
    {
      _id: false,
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

module.exports = mongoose.model('Drinkery', drinkery);