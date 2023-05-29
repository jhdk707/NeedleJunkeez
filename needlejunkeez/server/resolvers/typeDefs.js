const { gql } = require("apollo-server");

// Define your GraphQL type definitions
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    savedAlbums: [Album!]!
  }

  type Album {
    uri: String!
    name: String!
    artist: String!
    coverArtUrl: String!
  }

  type Query {
    albums: [Album!]!
    album(id: ID!): Album
  }

  type Mutation {
    createAlbum(input: AlbumInput!): Album!
  }

  input AlbumInput {
    artist: String!
    uri: String!
    name: String!
    coverArtUrl: String!
  }
`;

module.exports = typeDefs;
