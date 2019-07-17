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
const makeRegion = require('./backend/_regions/region');
app.use('/', (req, res, next) => {
  const newRegion = makeRegion({name: 'asia' });
  res.json({ message: 'Succesfully connected to the backend!', region: newRegion });
});

//Connecting to the DB and listening to the server after success.
db
  .then(() => app.listen(process.env.PORT))
  .catch(err => console.log(err));