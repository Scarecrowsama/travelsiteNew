const mongoose = require('mongoose');

const attraction = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, default: 0, required: true }, //Use 0 for free and -1 for unknown.
  // gallery: { 
  //   photos: [ String ], //Name like attraction-altText-altText... to split  the words and use them as a description or alt text.
  //   videos: [ String ],
  //   required: true 
  // },
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
}, {strict: true});

module.exports = mongoose.model('Attraction', attraction);