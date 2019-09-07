const mongoose = require('mongoose');

const country = new mongoose.Schema({
  basics: {
    name: { type: String, requried: true },
    regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
    languages: [
      { name: { type: String, required: true } }
    ],
    religions: [
      {
        name: { type: String, prevalecence: Number, comments: String }
      }
    ],
    economics: {
      currencies: [
        {
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
    telecoms: {
      phone: {
        calls: { type: Number, required: true },
        megabytes: { type: Number, required: true },
        comments: { type: String, required: true }
      },
      internet: [
        {
          device: { name: String },
          cost: { type: Number },
          comments: { type: String }
        }
      ],
    },
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
        name: { type: String },
        recommended: { type: Boolean },
        mandatory: { type: Boolean },
        comments: { type: String }
      }
    ],
    risks: {
      waterSafety: { 
        isSafe: { type: Boolean, required: true},
        comments: { type: String, required: true } 
      }, 
      others: [{
        name: { type: String },
        possibility: { type: Boolean },
        probability: { type: Number },
        description: { type: String }
      }]
    },
    prohibitions: [
      {
        name: { type: String },
        description: { type: String },
        gender: { type: String },
        penalty: { type: String }
      }
    ]
  },
  cities: [
    {
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