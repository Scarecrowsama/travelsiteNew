// Modules
const express           = require('express');
const bodyParser        = require('body-parser');
const dotenv            = require('dotenv').config();

// Additional files required to config the server.
const db                = require('./backend/database/db-connection');
const corsErrorHandler  = require('./backend/middlewares/preventCorsErrors');
const app               = express();

// Server configuration
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(corsErrorHandler);

// Routes
app.use('/regions', require('./backend/_regions/region-routes'));
app.use('/countries', require('./backend/_countries/country-routes'));
app.use('/cities', require('./backend/_cities/city-routes'));
app.use('/eateries', require('./backend/_eateries/eatery-routes'));

// Connecting to the DB and listening to the server after success.
db
  .then(() => app.listen(process.env.PORT) || 3000)
  .catch(err => console.log(err));