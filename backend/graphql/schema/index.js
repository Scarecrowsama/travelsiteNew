const { buildSchema } = require('graphql');

module.exports = buildSchema(`
type Region {
  _id: ID!
  name: String!
  countries: [Country!]
}

type Country {
  _id: ID!
  name: String!
  region: [Region!]!
}

type City {
  _id: ID!
  name: String!
  country: [Country!]!
}

type Attraction {
  _id: ID!
  name: String!
  price: Float!
  description: String!
  city: [City!]!
}

type Eatery {
  _id: ID!
  name: String!
  cuisine: String!
  priceRange: String!
  location: [Location!]!
  typeOfEatery: String!
  city: [City!]!
}

type Location {
  _id: ID!
  latitude: String!
  longitude: String!
  address: Float
}

type User {
  _id: ID!
  email: String!
  password: String!
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: String!
}

type RegionInput {
  name: String!
}

type CountryInput {
  name: String!
}

type CityInput {
  name: String!
}

type RootQuery {
  regions: [Region!]!
  countries: [Country!]!
  login(email: String!, password: String!): AuthData!
}

type RootMutation {
  createRegion(regionInput: RegionInput): Region
  createCountry(countryInput: CountryInput): Country
  createCity(cityInput: CityInput): City
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);