const mongoose = require('mongoose');

const country = new mongoose.Schema({
  name: { type: String, requried: true },
  languages: [
    { name: { type: String, required: true } }
  ],
  religions: [
    {
      name: { type: String, prevalecence: Number, comments: String }
    }
  ],
  money: {
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
  emergencyNumbers: [ 
    { 
      description: { type: String }, number: { type: Number } 
    }
  ],
  visas: [
    {

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
  ],
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
    ]
  },
  vaccinations: [
    {
      name: { type: String },
      recommended: { type: Boolean },
      mandatory: { type: Boolean },
      comments: { type: String }
    }
  ],
  customsDuties: [],
  importantDates: [],
  nationalHolidays: [
    {
      name: { type: String },
      date: { type: Date },
      duration: { type: Number },
      details: { type: String }
    }
  ],
  simCards: [],
  wifi: {
    coverage: { type: String },
    speed: { type: String },
    pocketWifi: { type: Boolean }
  },
  discountCards: [],
  food: {},
  weather: {
    details: { type: String },
    months: {
        january: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        february: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        march: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        april: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        may: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        june: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        july: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        august: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        september: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        october: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        november: { avgTemp: { type: Number }, avgRainyDays: { type: Number } },
        december: { avgTemp: { type: Number }, avgRainyDays: { type: Number } }
    } 
  },
  cities: [
    {
      id: { type: String },
      name: { type: String }
    }
  ],
  regionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Region' },
  rating: { 
    id: { type: mongoose.Schema.Types.ObjectId, ref: 'Rating' },
    totalVotes: { type: Number, default: 0 }, total: { type: Number, default: 0 }
  }
}, { strict: true, timestamps: true });

module.exports = mongoose.model('Country', country);