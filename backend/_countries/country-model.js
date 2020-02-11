const mongoose = require('mongoose');

const country = new mongoose.Schema({
  basics: {
    name: { type: String, required: true },
    regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region', required: true },
    languages: [
      { _id: false, name: { type: String, required: true }, official: { type: Boolean, required: true } }
    ],
    religions: [
      {
        _id: false, name: { type: String, required: true }, prevalecence: Number, comments: String, official: { type: Boolean, required: true }
      }
    ],
    economics: {
      currencies: [
        {
          _id: false,
          name: { type: String, required: true },
          acronym: { type: String, required: true },
          official: { type: Boolean, required: true },
        }
      ],
      comments: { type: String }
    },
    electrics: {
      voltage: { type: Number },
      frequency: { type: String },
      plug: { type: String },
    },
    food: {
      dietaryOptions: {
        glutenFree: { difficulty: { type: Number }, comments: { type: String } },
        vegetarian: { difficulty: { type: Number }, comments: { type: String } },
        vegan: { difficulty: { type: Number }, comments: { type: String } }
      },
      others: []
    },
    simCards: [],
    wifi: {
      coverage: { type: String },
      speed: { type: String },
      pocketWifi: { type: Boolean }
    },
    importantDates: [],
    nationalHolidays: [
      {
        _id: false,
        name: { type: String },
        date: { type: Date },
        duration: { type: Number },
        details: { type: String }
      }
    ],
  },
  costs: {
    food: [
      {
        _id: false,
        place: { type: String },
        cost: { type: Number },
        comments: { type: String }
      }
    ],
    accommodation: [
      {
        _id: false,
        place: { type: String },
        cost: { type: Number },
        comments: { type: String }
      }
    ],
    transport: [
      {
        _id: false,
        method: { type: String },
        cost: { type: Number },
        comments: { type: String }
      }
    ],
    telecoms: {
      phone: {
        calls: { type: Number },
        megabytes: { type: Number },
        comments: { type: String }
      },
      internet: [
        {
          _id: false,
          device: { name: String },
          cost: { type: Number },
          comments: { type: String }
        }
      ],
    },
    others: [
      {
        _id: false,
        name: { type: String },
        cost: { type: Number },
        comments: { type: String }
      }
    ],
    discountCards: [
      {
        _id: false,
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
  weather: {
    details: { type: String },
    months: {
      jan: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      feb: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      mar: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      apr: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      may: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      jun: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      jul: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      aug: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      sep: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      oct: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      nov: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
      dec: { avgTemp: { type: Number }, avgRainyDays: { type: Number } }
    } 
  },
  legal: {
    visas: [
      {
        _id: false,
      }
    ],
    customsDuties: [],
  },
  safety: {
    emergencyNumbers: [ 
      { 
        description: { type: String }, number: { type: Number } 
      }
    ],
    vaccinations: [
      {
        _id: false,
        name: { type: String },
        recommended: { type: Boolean },
        mandatory: { type: Boolean },
        comments: { type: String }
      }
    ],
    risks: {
      waterSafety: { 
        isSafe: { type: Boolean },
        comments: { type: String } 
      }, 
      others: [{
        _id: false,
        name: { type: String },
        possibility: { type: Boolean },
        probability: { type: Number },
        description: { type: String }
      }]
    },
    prohibitions: [
      {
        _id: false,
        name: { type: String },
        description: { type: String },
        gender: { type: String },
        penalty: { type: String }
      }
    ]
  },
  cities: [
    {
      _id: false,
      id: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
      name: { type: String }
    }
  ],
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  }
}, { strict: true, timestamps: true });

module.exports = mongoose.model('Country', country);