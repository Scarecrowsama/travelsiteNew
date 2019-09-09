//Modules
const express           = require('express');
const bodyParser        = require('body-parser');
const dotenv            = require('dotenv').config();

//Additional files required to config the server.
const db                = require('./backend/database/db-connection');
const corsErrorHandler  = require('./backend/middlewares/preventCorsErrors');
const app               = express();

//Server configuration
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(corsErrorHandler);

app.use('/region', require('./backend/_regions/region-routes'));
app.use('/country', require('./backend/_countries/country-routes'));
const adaptRequest = require('./backend/helpers/adapt-request');
const regionHandler = require('./backend/_regions/index');
// app.use('/', async (req, res, next) => {

//   // const makeCity = require('./backend/_cities/city');
//   // const newCity = makeCity({ name: 'Yolo', country: 'dd2e3d3dr2rff', attractions: [], eateries: [] });
//   // res.json(newCity);
//   // Testing regions
//   regionHandler(adaptRequest(req))
//   .then(({ headers, statusCode, data }) => {
//     res.set(headers).status(statusCode).json(data);
//   })
//   .catch(err => console.log('wtf'));

// });

//Connecting to the DB and listening to the server after success.
db
  .then(() => app.listen(process.env.PORT) || 3000)
  .catch(err => console.log(err));