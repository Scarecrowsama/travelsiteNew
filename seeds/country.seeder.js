const { Seeder } = require('mongoose-data-seed');
const Country = require('../backend/_countries/country-model');


const data = [
  {
    basics: {
      name: 'Japan',
      regionId: '5d6a3c4b2b27d6075493f6b4',
      languages: [{ name: 'Japanese' }],
      religions: [
        { name: 'Folk Shinto or No religion', prevalecence: 51.8, comments: '' },
        { name: 'Buddhism', prevalecence: 34.9, comments: '' }
      ],
      economics: {
        currencies: [
          { name: 'Yen', acronym: 'JPY',  official: true }
        ],
        comments: 'Japan\'s official currency.'
      },
      electrics: {
        voltage: 100,
        frequency: '50 Hz / 60 Hz',
        plug: 'A/B',
      },
      food: {
        dietaryOptions: {
          glutenFree: { difficulty: 4, comments: 'It is very difficult to find in Japan.' },
          vegetarian: { difficulty: 3, comments: 'It is difficult to find in Japan.' },
          vegan: { difficulty: 4, comments: 'It is very difficult to find in Japan.' }
        }
      },
      simCards: [],
      wifi: {
        coverage: 'Amazing' ,
        speed: 'Very Fast',
        pocketWifi: true
      },
      importantDates: [],
      nationalHolidays: [
        {
          name: 'New Year\'s Day',
          date: 1567241930376,
          duration: 1,
          details: 'New Year\'s Day'
        }
      ]
    },
    costs: {
      food: [
        {
          place: 'Convenience Stores',
          cost: 2.5,
          comments: 'Convenience stores in Japan are a quick fix for the budget traveler.'
        }
      ],
      accommodation: [
        {
          place: 'Hostels',
          cost: 3,
          comments: 'Hostels in Japan are an affordable way to stay in Japan.'
        }
      ],
      transport: [
        {
          method: 'Shinkanshen',
          cost: 5,
          comments: 'Shinkanshen, or bullet trains, are the most efficient way to move around Japan.'
        }
      ],
      telecoms: {
        phone: {
          calls: 3,
          megabytes: 3,
          comments: 'Getting a SIM card in Japan.'
        },
        internet: [
          {
            device: 'Pocket Wifi',
            cost: 2,
            comments: 'Pocket Wifi is a very affordable way to have Internet everywhere in Japan.'
          }
        ],
      },
      others: [],
      discountCards: [],
      averages: {
        food: 'Medium-High',
        accommodation: 'Medium-High',
        transport: 'Medium',
        phoneInternet: 'Low',
        others: 'Medium',
        avgPerDay: '25-35'
      }
    },
    weather: {},
    legal : {
      visas: [],
      customsDuties: []
    }, 
    safety: {
      emergencyNumbers: [ 
        { 
          description: 'Police', number: 110,
          description: 'Coast Guard', number: 118 ,
          description: 'Fire, Ambulance, Emergency Rescue', number: 119 
        }
      ],
      vaccinations: [],
      risks: {
        waterSafety: { 
          isSafe: true,
          comments: 'Is safe' 
        }, 
        others: [
          {
            name: 'Earthquakes',
            possibility: true ,
            probability: 7,
            description: 'Earthquakes in Japan'
          },
          {
            name: 'Tsunamis',
            possibility: true ,
            probability: 3,
            description: 'There is a risk of tsunamis in Japan, mainly after a big eartquake occurs in the ocean.'
          }
        ]
      },
      prohibitions: [],
    },
    cities: [],
    rating: {}
  },
  // {
  //   name: 'Portugal',
  //   languages: [{ name: 'Portuguese' }],
  //   religions: [
  //     { name: 'Catholic Church', prevalecence: 81, comments: '' }
  //   ],
  //   money: {
  //     currencies: [
  //       {
  //         name: 'Euro' ,
  //         acronym: 'EUR',
  //         official: true
  //       }
  //     ],
  //     comments: ''
  //   },
  //   electrics: {
  //     voltage: 230,
  //     frequency: '50 Hz',
  //     plug: 'C/F',
  //   },
  //   emergencyNumbers: [ 
  //     { 
  //       description: 'Ambulance, Fire, National Police', number: 112,
  //       description: 'Drug Abuse', number: 1414,
  //       description: 'Child Abuse', number: 213433333 
  //     }
  //   ],
  //   visas: [],
  //   risks: {
  //     waterSafety: { 
  //       isSafe: true,
  //       comments: 'Is safe' 
  //     }, 
  //     others: [
  //       {
  //         name: 'Pickpocketing',
  //         possibility: true ,
  //         probability: 7,
  //         description: 'Pickpocketers in Portugal'
  //       }
  //     ]
  //   },
  //   prohibitions: [],
  //   costs: [],
  //   vaccinations: [],
  //   customsDuties: [],
  //   importantDates: [],
  //   nationalHolidays: [
  //     {
  //       name: 'New Year\'s Day',
  //       date: 1567241930376,
  //       duration: 1,
  //       details: 'New Year\'s Day'
  //     }
  //   ],
  //   simCards: [],
  //   wifi: {
  //     coverage: 'Very Good' ,
  //     speed: 'Fast',
  //     pocketWifi: false
  //   },
  //   discountCards: [],
  //   food: {},
  //   weather: {},
  //   cities: [],
  //   regionId: '5d697e6c69e10b3aec9e5e84',
  //   rating: {}
  // },
  // {
  //   name: 'Spain',
  //   languages: [{ name: 'Spanish' }],
  //   religions: [
  //     { name: 'Christianism', prevalecence: 68.9, comments: '' },
  //     { name: 'No Religion', prevalecence: 27.1, comments: '' },
  //   ],
  //   money: {
  //     currencies: [
  //       {
  //         name: 'Euro' ,
  //         acronym: 'EUR',
  //         official: true
  //       }
  //     ],
  //     comments: ''
  //   },
  //   electrics: {
  //     voltage: 230,
  //     frequency: '50 Hz',
  //     plug: 'C/F',
  //   },
  //   emergencyNumbers: [ 
  //     { 
  //       description: 'Ambulance, Fire, National Police', number: 112,
  //       description: 'Drug Abuse', number: 1414,
  //       description: 'Child Abuse', number: 213433333 
  //     }
  //   ],
  //   visas: [],
  //   risks: {
  //     waterSafety: { 
  //       isSafe: true,
  //       comments: 'Is safe' 
  //     }, 
  //     others: [
  //       {
  //         name: 'Pickpocketing',
  //         possibility: true ,
  //         probability: 7,
  //         description: 'Pickpocketers in Portugal'
  //       }
  //     ]
  //   },
  //   prohibitions: [],
  //   costs: [],
  //   vaccinations: [],
  //   customsDuties: [],
  //   importantDates: [],
  //   nationalHolidays: [
  //     {
  //       name: 'New Year\'s Day',
  //       date: 1567241930376,
  //       duration: 1,
  //       details: 'New Year\'s Day'
  //     }
  //   ],
  //   simCards: [],
  //   wifi: {
  //     coverage: 'Very Good' ,
  //     speed: 'Fast',
  //     pocketWifi: false
  //   },
  //   discountCards: [],
  //   food: {},
  //   weather: {},
  //   cities: [],
  //   regionId: '5d697e6c69e10b3aec9e5e84',
  //   rating: {}
  // }
];

class CountrySeeder extends Seeder {

  async shouldRun() {
    return Country.countDocuments().exec().then(count => count === 0);
  }

  async run() {
    return Country.create(data);
  }
}

module.exports = CountrySeeder;
