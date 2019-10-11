const mongoose = require('mongoose');
const Region = require('./seeds/region.seeder');
const Country = require('./seeds/country.seeder');
const City = require('./seeds/city.seeder');
const Eatery = require('./seeds/eatery.seeder');
const ThingToDo = require('./seeds/thingtodo.seeder');
const Article = require('./seeds/article.seeder');
const Rating = require('./seeds/rating.seeder');
const Drinkery = require('./seeds/drinkery.seeder');
const Itinerary = require('./seeds/itinerary.seeder');
// const Attraction = require('./seeds/attraction.seeder');

const mongoURL = process.env.MONGO_URL || 'mongodb://localhost/travelsite-new';
/**
 * Seeders List
 * order is important
 * @type {Object}
 */
exports.seedersList = {
  Region,
  Country,
  City,
  Eatery,
  ThingToDo,
  Article,
  Rating,
  Drinkery,
  Itinerary,
  // Attraction
};
/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
exports.connect = async () =>
  await mongoose.connect(mongoURL, { useNewUrlParser: true });
/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
exports.dropdb = async () => mongoose.connection.db.dropDatabase();