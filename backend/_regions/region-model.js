const mongoose = require('mongoose');

const region = new mongoose.Schema({
  name: { type: String, required: true },
  countries: [
    {
      id : { type: mongoose.Schema.Types.ObjectId, ref: 'Country', required: true },
      name: { type: String, required: true }
    }
  ]
});

module.exports = mongoose.model('Region', region);
