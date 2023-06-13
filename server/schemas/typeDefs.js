const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Review {
    _id: ID
    reviewAuthor: [User]
    reviewText: String
    createdAt: Date
  }

  type Trail {
    _id: ID
    name: String
    address: String
    description: String
    location: String
  }
`;

module.exports = typeDefs;