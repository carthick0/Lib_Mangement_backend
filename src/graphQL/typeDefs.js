const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Book {
    id: ID!
    title: String!
    author: String!
    isbn: String!
    publicationDate: String
    genre: String
    copies: Int!
  }

  type Borrow {
    id: ID!
    user: User!
    book: Book!
    borrowedAt: String!
    returnedAt: String
  }

  type Query {
    me: User
    users: [User!]
    books: [Book!]
  }

  type Mutation {
    register(name: String!, email: String!, password: String!, role: String): AuthPayload!
    login(email: String!, password: String!): AuthPayload!

    addBook(title: String!, author: String!, isbn: String!, publicationDate: String, genre: String, copies: Int!): Book!
    updateBook(id: ID!, title: String, author: String, copies: Int): Book!
    deleteBook(id: ID!): String!

    borrowBook(userId: ID!, bookId: ID!): Borrow
    returnBook(userId: ID!, bookId: ID!): Borrow
  }
`;

module.exports = typeDefs;
