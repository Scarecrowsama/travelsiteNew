const mongoose = require('mongoose');

const region = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 20, enum: process.env.VALID_REGION_NAMES.split(',') },
  countries: [
    {
      _id: false,
      id : { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
      name: { type: String, required: true, minlength: 2, maxlength: 20 }
    }
  ]
});

module.exports = mongoose.model('Region', region);
