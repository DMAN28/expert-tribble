// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type User {
  _id: ID
  username: String
  email: String
  bookCount: Int
  savedBooks: [Book]
  
}

type book {
  bookId: ID
  author: String
  description: String
  title: String
  image: String
  link: String
}
type Query {
  users: [User]
  
}
`;

// export the typeDefs
module.exports = typeDefs;