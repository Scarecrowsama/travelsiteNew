//Modules
const express           = require('express');
const bodyParser        = require('body-parser');
const graphqlHttp       = require('express-graphql');
const dotenv            = require('dotenv').config();

//Additional files required to config the server.
const graphqlSchema     = require('./backend/graphql/schema/index');
const graphqlResolvers  = require('./backend/graphql/resolvers/index');
const db                = require('./backend/database/db-connection');
const corsErrorHandler  = require('./backend/middlewares/preventCorsErrors');
const app               = express();

//Server configuration
app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(corsErrorHandler);

//Defining GraphQl endpoint.
app.use('/graphql', graphqlHttp({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true
}));
// const makeRegionsResolver = require('./backend/_regions/region-resolver');
const adaptRequest = require('./backend/helpers/adapt-request');
const regionHandler = require('./backend/_regions/index');
app.use('/', async (req, res, next) => {

  const makeCity = require('./backend/_cities/city');
  const newCity = makeCity({ name: 'Yolo', country: 'dd2e3d3dr2rff', attractions: [], eateries: [] });
  res.json(newCity);
  //Testing regions
  // regionHandler(adaptRequest(req))
  // .then(({ headers, statusCode, data }) => {
  //   res.set(headers).status(statusCode).json(data);
  // })
  // .catch(err => console.log('wtf'));

});

//Connecting to the DB and listening to the server after success.
db
  .then(() => app.listen(process.env.PORT))
  .catch(err => console.log(err));